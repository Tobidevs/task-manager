import React from 'react'
import Tag from './Tag'

const TaskCard = () => {
  return (
    <div className='w-full h-fit border border-[#D3D8DE] rounded-2xl pl-3 pr-3 pt-3 pb-2 flex flex-col gap-2'>
        <div className='w-full h-3/8 flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <div className='text-2xl text-[#2C2C2C] font-semibold'>Track Money</div>
                <div className='flex items-center justify-center w-7 h-5 pb-1 text-xl bg-[#c4c4c4] rounded-xl'>&hellip;</div>
            </div>
            
            <div className='rounded-full h-3 w-3 bg-[#6F6F6F] mr-2'></div>
        </div>
        {/* <p className='text-sm'>Track expenses from bank accounts and track money</p> */}
        <div className='flex gap-1'>
            <Tag />
            <Tag />
        </div>
    </div>
  )
}

export default TaskCard