import express from 'express'
export const taskRouter = express.Router()
import { TaskModel } from '../models/taskModel.js'

// Create task in DB
taskRouter.post('/', async (req, res, next) => {
    try {
        if (!req.body.name) {
            return res.status(400).send({ message: 'Provide name for task!' })
        }
        const newTask = {
            name: req.body.name,
            description: req.body.description,
            tags: req.body.tags
        }
        // Create Book
        const task = await TaskModel.create(newTask)
        return res.status(201).json(task)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// Get all tasks from DB
taskRouter.get('/', async (req, res, next) => {
    try {
        const tasks = await TaskModel.find({})
        res.status(200).json({
            count: tasks.length, 
            data: tasks
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

