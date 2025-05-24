import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { taskRouter } from './routes/taskRoutes.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.use('/tasks', taskRouter);

// Serve static files from Vite's dist folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Catch-all: serve index.html for frontend routes
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});


// Start server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// MongoDB
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));
