
from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import datetime

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize SQLite database in memory
def get_db_connection():
    conn = sqlite3.connect(':memory:', check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn

# Set up database tables
def init_db():
    conn = get_db_connection()
    conn.execute('''
    CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')
    conn.commit()
    conn.close()

# Initialize the database
init_db()

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

# API to handle contact form submissions
@app.route('/api/contacts', methods=['POST'])
def create_contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    if not name or not email or not message:
        return jsonify({'error': 'All fields are required'}), 400
    
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
            (name, email, message)
        )
        conn.commit()
        last_id = cursor.lastrowid
        conn.close()
        
        return jsonify({
            'id': last_id,
            'success': True
        }), 201
    except Exception as e:
        print(f"Database error: {e}")
        return jsonify({'error': 'Failed to save contact'}), 500

# API to get all contacts
@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    try:
        conn = get_db_connection()
        contacts = conn.execute('SELECT * FROM contacts ORDER BY created_at DESC').fetchall()
        conn.close()
        
        # Convert to list of dicts
        result = []
        for contact in contacts:
            result.append({
                'id': contact['id'],
                'name': contact['name'],
                'email': contact['email'],
                'message': contact['message'],
                'created_at': contact['created_at']
            })
        
        return jsonify(result)
    except Exception as e:
        print(f"Database error: {e}")
        return jsonify({'error': 'Failed to retrieve contacts'}), 500

# Run the server if this file is executed directly
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)
