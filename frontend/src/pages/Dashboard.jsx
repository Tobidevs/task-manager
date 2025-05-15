import React from 'react'
import TitleBar from '../components/TitleBar'
import SideBar from '../components/SideBar'
import TaskCard from '../components/TaskCard'

const Dashboard = () => {
  
  return (
    <div className='bg-[#F0F4FF] h-screen w-screen'>
      <TitleBar />
      <div className='w-full h-full flex'>
        <SideBar />
        <div className='w-6/7'>
          <div className='h-1/11 w-full text-[#2C2C2C] font-semibold text-3xl flex items-center pl-20'>My Tasks</div>
          <div className='w-full h-10/11 pr-8 pl-8 pb-8 flex justify-between'>
            <div className='bg-[#F6F9FF] h-full border w-3/10 rounded-3xl border-[#D3D8DE]'>
              <div className='h-14 w-full flex justify-center items-center'>
                <div className="flex items-center bg-[#BCBEC1] h-7 rounded-2xl pr-3 pl-3 ">
                  <div className='rounded-full h-3 w-3 bg-[#6F6F6F] mr-2'></div>
                  <div className='font-medium'>Incomplete</div>
                </div>
              </div>
              <div className='h-11/12 w-full pr-5 pl-5 flex flex-col gap-4'>
                <TaskCard />
                
                
                
              </div>

            </div>
            <div className='bg-[#F6F9FF] h-full w-3/10 rounded-3xl border-1 border-[#D3D8DE]'>
            <div className='h-14 w-full flex justify-center items-center'>
                <div className="flex items-center bg-[#B5CEFF] h-7 rounded-2xl pr-3 pl-3 ">
                  <div className='rounded-full h-3 w-3 bg-[#5F99DF] mr-2'></div>
                  <div className='font-medium'>In progress</div>
                </div>
              </div>
              <div className='h-11/12 w-full '>
                
              </div>

            </div>
            <div className='bg-[#F6F9FF] h-full w-3/10 rounded-3xl border-1 border-[#D3D8DE]'>
            <div className='h-14 w-full flex justify-center items-center'>
                <div className="flex items-center bg-[#9EE9BE] h-7 rounded-2xl pr-3 pl-3 ">
                  <div className='rounded-full h-3 w-3 bg-[#3CD08B] mr-2'></div>
                  <div className='font-medium'>Completed</div>
                </div>
              </div>
              <div className='h-11/12 w-full '>
                
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard