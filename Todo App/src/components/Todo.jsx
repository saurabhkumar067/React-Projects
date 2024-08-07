import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getLocalStoragetodoDate, setLocalStoragetodoDate } from "./TodoLocalStorage";

function Todo() {
  

  const [task, setTask] = useState(() => getLocalStoragetodoDate());

  const handleButton = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    // if (task.includes(inputValue)) return alert("You have already add this task");
    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return alert("You have already add this task");
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  setLocalStoragetodoDate(task)
              
  const handleDelete = (value) => {
    const filterTodo = task.filter((currTask) => currTask.content !== value);
    setTask(filterTodo);
  };

  const handleClearAll = () => {
    setTask([]);
  };

  const handleCheckTodo = (contentLine) => {
    const updateTask = task.map((currTask) => {
      if (currTask.content === contentLine) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updateTask);
  };

  return (
    <section className="m-auto w-1/3 width">
      <header className="text-center text-4xl font-bold my-5">
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <section className="flex flex-wrap flex-col justify-center items-center">
        <TodoForm addFormBtn={handleButton} />
        <div className=" my-5 px-2">
          <ul>
            {task.map((currTask) => {
              return (
                <TodoList
                  key={currTask.id}
                  data={currTask.content}
                  checked={currTask.checked}
                  handleClearTodoData={handleDelete}
                  onHandleCheckTodo={handleCheckTodo}
                />
              );
            })}
          </ul>
        </div>
        <div
          onClick={handleClearAll}
          className="p-2 px-5 text-2xl bg-red-700 text-white rounded-lg hover:bg-red-500 cursor-pointer duration-700"
        >
          Clear All
        </div>
      </section>
    </section>
  );
}

export default Todo;
