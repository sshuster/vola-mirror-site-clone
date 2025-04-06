
import express from 'express';
import cors from 'cors';
import { Database } from 'better-sqlite3';
import path from 'path';

// Initialize SQLite database
const db = new Database(':memory:'); // In-memory database for simplicity

// Set up database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API to handle contact form submissions
app.post('/api/contacts', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  try {
    const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
    const result = stmt.run(name, email, message);
    
    return res.status(201).json({ 
      id: result.lastInsertRowid,
      success: true 
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to save contact' });
  }
});

// API to get all contacts
app.get('/api/contacts', (req, res) => {
  try {
    const contacts = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all();
    return res.json(contacts);
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
});

// Only start the server if this file is executed directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
