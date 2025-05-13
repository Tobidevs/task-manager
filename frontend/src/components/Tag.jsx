import React from 'react'

const Tag = ({ value, onDelete }) => {
  return (
    <div className='w-fit h-7 flex justify-between items-center gap-2 bg-[#2C2C2C] pl-2 pr-2 rounded-xl text-white'>
        <p className=''>{value}</p>
        <div className='cursor-pointer text-xl' onClick={() => onDelete(value)}>&times;</div>
        
    </div>
  )
}

export default Tag