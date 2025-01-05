import React from "react";

function Header({ changeUser, data }) {
  const handleLogOut = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    changeUser("");
  };


  return (
    <div className="flex items-end justify-between ">
      <h1 className="md:text-2xl sm:text-xl min-[320px]:text-sm font-medium">
        Hello <br /> <span className="sm:text-3xl min-[320px]:text-xl font-semibold">{data.firstName} 👋</span>
      </h1>
      <button
        onClick={handleLogOut}
        className="py-2 md:px-5 min-[320px]:px-3  md:text-lg min-[320px]:text-base  bg-red-600  rounded-sm font-medium border-none outline-none"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
