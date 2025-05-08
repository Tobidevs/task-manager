import React from 'react'
import TitleBar from '../components/TitleBar'
import SideBar from '../components/SideBar'

const Dashboard = () => {
  return (
    <div className='bg-[#F0F4FF] h-screen w-screen'>
      <TitleBar />
      <div className='w-full h-full flex'>
        <SideBar />
        <div className='w-6/7'>
          <div className='h-1/11 w-full font-semibold text-3xl flex items-center pl-20'>My Tasks</div>
          <div className='w-full h-10/11 border flex justify-between'>
            <div className='bg-[#F6F9FF] h-5/6 w-1/3'>

            </div>
            <div className='bg-[#F6F9FF] h-5/6 w-1/3'>

            </div>
            <div className='bg-[#F6F9FF] h-5/6 w-1/3'>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard