import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/taskList/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data, changeUser}) {
  // console.log("employeeDashboard", data);
  

  return (
    <div className="md:p-8 min-[320px]:px-4 min-[320px]:py-8 bg-[#1c1c1c] sm:h-screen">
      <Header changeUser={changeUser} data={data}  />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
