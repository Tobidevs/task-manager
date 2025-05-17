import React, { useState } from 'react'
import Tag from './Tag'

const TaskCard = ({ task, onTagDelete }) => {
    const { name, description, tags } = task
    const [showDescription, setShowDescription] = useState(false);

    const handleToggle = () => {
        setShowDescription(prev => !prev);
    };

    const handleDelete = (tagToRemove) => {
        const newTags = tags.filter(tag => tag != tagToRemove)
        onTagDelete(newTags, task._id)
    }
    
  return (
    <div className='w-full h-fit border border-[#D3D8DE] rounded-2xl pl-3 pr-3 pt-3 pb-2 flex flex-col gap-2'>
        <div className='w-full h-3/8 flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <div className='text-2xl text-[#2C2C2C] font-semibold'>{name}</div>
                <div className='flex items-center justify-center w-7 h-5 pb-1 text-xl bg-[#c4c4c4] rounded-xl cursor-pointer' onClick={handleToggle}>&hellip;</div>
            </div>
            <div className='rounded-full h-3 w-3 bg-[#6F6F6F] mr-2'></div>
        </div>
        {showDescription && <p>{description}</p>}
        <div className='flex gap-1 flex-wrap'>
        {
        tags && tags.map((tag => (<Tag tagName={tag} onDelete={handleDelete}/>)))
        }
        </div>
    </div>
  )
}

export default TaskCard