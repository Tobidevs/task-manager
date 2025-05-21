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

// Get one task from DB
taskRouter.get('/:id', getTask, (req, res, next) => {
    res.json(res.task)
})

// Update task from DB
taskRouter.patch('/:id', getTask, async (req, res, next) => {
    if (req.body.name != null) {
        res.task.name = req.body.name
    }
    if (req.body.description != null) {
        res.task.description = req.body.description
    }
    if (req.body.status != null) {
        res.task.status = req.body.status
    }
    if (req.body.tags != null) {
        res.task.tags = req.body.tags
    }
    try {
        const updatedTask = await res.task.save()
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

// Delete task from DB
taskRouter.delete('/:id', getTask, async(req, res, next) => {
    try {
        await res.task.deleteOne()
        res.json({ message: 'Deleted task' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get task by ID
async function getTask(req, res, next) {
    let task
    try {
        task = await TaskModel.findById(req.params.id)
        if (!task) {
            return res.status(404).json({ message: 'Cannot find task' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    res.task = task
    next()
}