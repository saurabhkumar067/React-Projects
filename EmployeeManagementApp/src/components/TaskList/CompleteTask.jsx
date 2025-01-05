import React from 'react'

function CompleteTask({data}) {
  return (
    <div className="h-full sm:w-[300px] min-[320px]:w-full bg-[#478ADE] rounded-xl flex-shrink-0 p-5 sm:mb-0  min-[320px]:mb-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 py-1 px-3 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-4 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="mt-2 tracking-tight">
        {data.taskDescription}
        </p>
        <div className="mt-2">
            <button className='w-full'>Complete</button>
        </div>
      </div>
  )
}

export default CompleteTask