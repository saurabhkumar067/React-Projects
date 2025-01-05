import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDasboard({changeUser, data}) {
  // console.log("adminDasboard", data);
  return (
    <div className="md:px-8 md:py-3 min-[320px]:py-5 min-[320px]:px-5 h-screen w-full">
      <Header changeUser={changeUser} data={data}/>
      <CreateTask />
      <AllTask  />
    </div>
  );
}

export default AdminDasboard;
