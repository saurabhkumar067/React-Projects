import React from "react";

function TaskListNumbersComponent({ bgColor, value, task }) {
  return (
    <div className={`lg:p-7 min-[320px]:px-2 min-[320px]:py-4 rounded-xl sm:px-4 w-[full ${bgColor}`}>
      <h1 className="text-4xl  min-[320px]:font-bold">{value}</h1>
      <h3 className="lg:text-xl md:text-base min-[320px]:text-sm font-medium">{task}</h3>
    </div>
  );
}

export default TaskListNumbersComponent;
