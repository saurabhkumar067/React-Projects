import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
  const [ userData, setUserData ] = useContext(AuthContext);

  const [assignTask, setAssignTask] = useState({
    taskTitle: "",
    taskDate: "",
    firstName: "",
    category: "",
    taskDescription: "",
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssignTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateTask = (e) => {
    e.preventDefault();

    const data = userData.employees;
    
    data.forEach((elem) => {
      if (elem.firstName == assignTask.firstName) {
        elem.tasks.push(assignTask);
        elem.taskNumbers.newTask += 1;
      }
    });

    
    setAssignTask({
      taskTitle: "",
      taskDate: "",
      firstName: "",
      category: "",
      taskDescription: "",
    });
  };
  return (
    <div>
      <form
        onSubmit={handleCreateTask}
        className="md:flex items-start justify-between w-full flex-wrap bg-[#1C1C1C] rounded py-4 md:px-6 min-[320px]:px-4 mt-4"
      >
        <div className="md:w-2/5 h-full">
          <div>
            <h3 className="text-base tracking-wide mb-1">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-transparent border-2 p-1 px-3 rounded-md outline-none border-zinc-600 text-white"
              name="taskTitle"
              id="taskTitle"
              value={assignTask.taskTitle}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="my-4">
            <h3 className="text-base tracking-wide mb-1">Date</h3>
            <input
              type="date"
              className="w-full bg-transparent border-2 p-1 px-3 rounded-md outline-none border-zinc-600 text-white"
              name="taskDate"
              id="taskDate"
              value={assignTask.taskDate}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <h3 className="text-base tracking-wide mb-1">Assign to</h3>
            <input
              type="text"
              placeholder="employee name"
              className="w-full bg-transparent border-2 p-1 px-3 rounded-md outline-none border-zinc-600 text-white"
              name="firstName"
              id="firstName"
              value={assignTask.firstName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="my-4">
            <h3 className="text-base tracking-wide mb-1">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="w-full bg-transparent border-2 p-1 px-3 rounded-md outline-none border-zinc-600 text-white"
              name="category"
              id="category"
              value={assignTask.category}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        <div className="md:w-2/5">
          <div className="w-full ">
            <h3 className="text-base tracking-wide mb-1">Description</h3>
            <textarea
              className="w-full md:h-56 min-[320px]:h-32 bg-transparent border-2 p-1 px-3 rounded-md outline-none border-zinc-600 text-white"
              name="taskDescription"
              id="taskDescription"
              value={assignTask.taskDescription}
              onChange={(e) => handleInputChange(e)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-center w-full bg-red-600 py-3 mt-2 rounded-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;

// 3:46
