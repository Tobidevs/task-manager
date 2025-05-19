import React from 'react'

const EditTaskModal = () => {
  return (
    <div className="fixed inset-0 bg-gray-700/50 flex items-center justify-center z-50">
        <div className="bg-[#F0F4FF] p-8 rounded-xl shadow-lg w-2/5 h-4/5 flex justify-center">
            <h1 className='text-[#2C2C2C] font-semibold text-3xl'>Edit Task</h1>

        </div>
    </div>
  )
}

export default EditTaskModal