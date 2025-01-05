import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c]  rounded mt-3 overflow-auto md:h-44 w-full ">
      {/* <div className="bg-[#1c1c1c]  font-bold  rounded-t w-full overflow-auto text-lg"> */}
        <div className="bg-red-400 flex justify-between  mb-2 py-3 mt-2 px-4 font-bold w-[98%] mx-auto overflow-auto md:text-lg min-[320px]:text-sm rounded">
        <h2 className="md:w-1/5 "> Employee Name</h2>
        <h2 className="md:w-1/5 "> New Task</h2>
        <h2 className="md:w-1/5 "> Active Task</h2>
        <h2 className="md:w-1/5 "> Completed</h2>
        <h2 className="md:w-1/5 "> Failed</h2>
      {/* </div> */}
        </div>

      <div className="overflow-auto px-4">
        {userData.employees.map((elem, idx) => {
        
          return (
            <div key={idx} className="border-emerald-500 border-2 py-2 px-4 flex justify-between rounded mb-2 min-[320px]:text-sm md:text-lg font-medium">
              <h2 className="w-1/5 ">{elem.firstName}</h2>
              <h3 className="w-1/5  text-blue-400">{elem.taskNumbers.newTask}</h3>
              <h5 className="w-1/5  text-yellow-400">{elem.taskNumbers.active}</h5>
              <h2 className="w-1/5  text-white"> {elem.taskNumbers.completed}</h2>
              <h2 className="w-1/5  text-red-600"> {elem.taskNumbers.failed}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;
