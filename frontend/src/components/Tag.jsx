import React from 'react'

const Tag = ({ tagName, onDelete }) => {
  return (
    <div className='w-fit h-7 flex justify-between items-center gap-2 bg-[#2C2C2C] pl-2 pr-2 rounded-xl text-white'>
      <p className=''>{tagName}</p>
      <div className='cursor-pointer text-xl' onClick={() => onDelete(tagName)}>&times;</div>
    </div>
  )
}

export default Tag