import React from 'react'
import { MdDashboard } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className='h-full w-1/7 bg-[#F6F9FF] border-r-1 border-[#D3D8DE] flex justify-center items-center'>
        <div className='h-2/5 w-full pl-6 text-2xl flex flex-col gap-5 '>
            <div className='flex items-center'>
                <MdDashboard />
                <button className='pl-2'>Dashboard</button>
            </div>
            <div className='flex items-center'>
                <IoAddCircle/>
                <button className='pl-2'>Create Task</button>
            </div>
        </div>
    </div>
  )
}

export default SideBar