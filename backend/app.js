import express from 'express';
import {PORT, mongodbURL} from './config.js'
import mongoose from 'mongoose';
import cors from 'cors'
import { taskRouter } from './routes/taskRoutes.js';

const app = express();

app.use(express.json());

// Middleware for handling CORS policy 
app.use(cors())

app.use('/tasks', taskRouter)

app.listen(PORT, () => {
    console.log("Server is running")
})


// Mongoose connection
mongoose.connect(mongodbURL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'));