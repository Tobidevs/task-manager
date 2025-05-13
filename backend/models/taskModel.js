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
        tags: {
            type: [String],
            default: []
        }
    }
)

export const TaskModel = mongoose.model('Task', taskSchema)