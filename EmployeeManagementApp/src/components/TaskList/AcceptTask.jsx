import React from "react";

function AcceptTask({data}) {

  
  return (
    <div className="h-full sm:w-[300px] min-[320px]:w-full bg-red-400 rounded-xl flex-shrink-0 p-5 sm:mb-0 min-[320px]:mb-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 py-1 px-3 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-4 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 tracking-tight">
       {data.taskDescription}
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
}

export default AcceptTask;
