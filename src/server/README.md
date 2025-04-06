
# Client-Server Application

This project uses a client-server architecture with:
- React frontend (Vite)
- Express.js backend
- SQLite database

## Running the Server

To run the server:

```bash
# Navigate to the server directory
cd src/server

# Install dependencies if not already installed
npm install

# Run the server
npx ts-node index.ts
```

The server will start on port 3001 by default.

## Running the Frontend

In a separate terminal:

```bash
# From the project root
npm run dev
```

The frontend will connect to the backend running on port 3001.
