import React from 'react'
import { MdDashboard } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='h-full w-1/7 bg-[#F6F9FF] border-r-1 border-[#D3D8DE] flex justify-center items-center'>
        <div className='h-2/5 w-full pl-6 text-2xl flex flex-col gap-5 '>
            <div className='flex items-center'>
                <MdDashboard />
                <Link to="/tasks" className='pl-2'>Dashboard</Link>
            </div>
            <div className='flex items-center'>
                <IoAddCircle/>
                <Link to="/tasks/createtask" className='pl-2'>Create Task</Link>
            </div>
        </div>
    </div>
  )
}

export default SideBar