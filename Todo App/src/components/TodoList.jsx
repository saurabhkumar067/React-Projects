import React from "react";


function TodoList({ data, checked, handleClearTodoData, onHandleCheckTodo }) {
  return (
    <>
      <li className="bg-white items-center rounded-3xl text-black py-1 px-2 flex justify-between mb-3 w-64">
        <span
          className={checked ? "line-through text-zinc-400" : "decoration-none"}
        >
          {data}
        </span>
        <div className="flex gap-3">
          <button
            onClick={() => {
              onHandleCheckTodo(data);
            }}
            className="bg-gray-500 w-10 h-9 rounded-full  font-bold cursor-pointer hover:bg-orange-700 duration-700"
          >✔</button>
          <button
            onClick={() => handleClearTodoData(data)}
            className="bg-red-700 w-10 h-9 rounded-full text-white font-bold cursor-pointer hover:bg-red-500 duration-700"
          >X</button>
        </div>
      </li>
    </>
  );
}

export default TodoList;
