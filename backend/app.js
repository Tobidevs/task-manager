import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { taskRouter } from './routes/taskRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Allow requests from your deployed frontend
app.use(cors({
  origin: 'https://your-frontend.vercel.app', //todo deploy vercel then change this
}));

// API routes
app.use('/tasks', taskRouter);

// Optional: logging middleware
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Start server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to Database'));
