import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { taskRouter } from './routes/taskRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Allow requests from frontend
app.use(cors({
  origin: 'http://task-manager-pi-puce.vercel.app/'
}));

// API routes
app.use('/tasks', taskRouter);

// Start server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to Database'));
