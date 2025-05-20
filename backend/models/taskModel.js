import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        status: {
            type: String,
            enum: ['incomplete', 'in progress', 'completed'],
            default: 'incomplete'
        },
        tags: {
            type: [String],
            default: []
        }
    }
)

export const TaskModel = mongoose.model('Task', taskSchema)