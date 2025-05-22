import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import { taskRouter } from './routes/taskRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

// Middleware for handling CORS policy 
app.use(cors())

app.use('/tasks', taskRouter)

app.listen(process.env.PORT)


// Mongoose connection
mongoose.connect(process.env.MONGODB_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'));