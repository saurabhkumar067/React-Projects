import React from "react";
import TaskListNumbersComponent from "./TaskListNumberComponent";

function TaskListNumbers({ data }) {
  return (
    <div className="grid sm:grid-cols-4 min-[320px]:grid-cols-2 justify-between my-10 md:gap-5 min-[320px]:gap-2">
      <TaskListNumbersComponent
        bgColor="bg-[#478ADE]"
        value={data.taskNumbers.newTask}
        task="New Task"
      />
      <TaskListNumbersComponent
        bgColor="bg-[#AAC275]"
        value={data.taskNumbers.completed}
        task="Completed Task"
      />
      <TaskListNumbersComponent
        bgColor="bg-[#F5D065]"
        value={data.taskNumbers.active}
        task="Active Task"
      />
      <TaskListNumbersComponent
        bgColor="bg-[#C77450]"
        value={data.taskNumbers.failed}
        task="Failed Task"
      />
    </div>
  );
}

export default TaskListNumbers;
