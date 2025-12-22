import React from 'react'

const Pagination = () => {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div className='px-5 hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
        <div>1</div>
        <div className='px-5 hover:cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination