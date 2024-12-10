import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-green-900 rounded-xl  ">

    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{data.category}</h3>
<h4 className='text-sm'>{data.date}</h4>

    </div>
    <h2 className='my-5 text-2xl font-semibold'>{data.task}</h2>
    <p className='text-sm mt-2'>
      {data.description}
    </p>
    <div className='mt-2 '>
         <button className='mt-2 ml-16  w-24 bg-green-600'>Completed</button>
    </div>
    
  </div>
  )
}

export default CompleteTask
