

const AcceptTask = ({data}) => {

  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-cyan-500 rounded-xl  ">

        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{data.category}</h3>
<h4 className-54='text-sm'>{data.date}</h4>

        </div>
        <h2 className='my-5 text-2xl font-semibold'>{data.task}</h2>
        <p className='text-sm mt-2'>
       {data.description}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500  py-1 px-2 text-sm' >marks as completed</button>
            <button className='bg-red-600  py-1 px-2 text-sm' > mark as failed</button>
        </div>
        
      </div>
  )
}

export default AcceptTask
