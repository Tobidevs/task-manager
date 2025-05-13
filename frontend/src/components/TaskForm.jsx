import {React, useState} from 'react'

const TaskForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, description, tags);
    }

  return (
    <form type="submit" onSubmit={handleSubmit} className='w-3/12 h-7/12 border border-[#D3D8DE] rounded-xl p-8 flex flex-col gap-6 '>
        <div className='flex flex-col gap-2 h-fit w-full'>
            <label>Name</label>
            <input
            type="text"
            name="name"
            placeholder="Value"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="border pl-5 pt-2 pb-2 w-full border-[#D3D8DE] rounded-xl"
            />
        </div>
        <div className='flex flex-col gap-2 h-fit w-full'>
            <label>Description</label>
            <input
            type="text"
            name="name"
            placeholder="Value"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border pl-5 pt-2 pb-2 w-full border-[#D3D8DE] rounded-xl"
            />
        </div>
        <div className='flex flex-col gap-2 h-fit w-full'>
            <label>Tags</label>
            <input
            type="text"
            name="name"
            placeholder="Value"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            className="border pl-5 pt-2 pb-2 w-full border-[#D3D8DE] rounded-xl"
            />
            <div>

            </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-xl cursor-pointer">Submit</button>
        
            
    </form>
  )
}

export default TaskForm