
# Client-Server Application

This project uses a client-server architecture with:
- React frontend (Vite)
- Flask backend
- SQLite database

## Running the Server

To run the Flask server:

```bash
# Navigate to the server directory
cd src/server

# Install required Python packages (first time only)
pip install flask flask-cors

# Run the server
python app.py
```

The server will start on port 3001 by default.

## Running the Frontend

In a separate terminal:

```bash
# From the project root
npm run dev
```

The frontend will connect to the backend running on port 3001.
