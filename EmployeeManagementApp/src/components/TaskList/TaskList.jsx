import React, { useEffect, useState } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { data } from "autoprefixer";

function TaskList({ data }) {

  return (
    <div
      id="taskList"
      className="md:h-[57%] lg:h-[51%] xl:h-[50%] sm:overflow-x-scroll pt-3 xl:pb-2 lg:pb-6 w-full sm:flex items-start justify-start gap-5 flex-nowrap"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
}

export default TaskList;

// 2:35
