import React, { useState } from "react";

function TodoForm({ addFormBtn }) {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };
  const handleButton = (e) => {
    e.preventDefault();
    addFormBtn(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };
  return (
    <>
      <form className="flex m-auto">
        <div>
          <input
            type="text"
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
            value={inputValue.content}
            className="w-4/4 py-1 px-1 border-none outline-none rounded-l-lg text-black"
            autoComplete="off"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleButton}
            className="bgColor py-1 px-2 rounded-r-lg cursor-pointer text-white hover:bg-gray-500 duration-700"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
