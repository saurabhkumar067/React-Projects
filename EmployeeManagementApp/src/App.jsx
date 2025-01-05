import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDasboard from "./components/Dashboard/AdminDasboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
    const  userData = JSON.parse(loggedInUser)
        setUser(userData);
        setLoggedInUserData(userData.data)        
    }  
  }, []);

  // console.log("app",loggedInUserData);
  // console.log("apps",userData);

  

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      const admin = userData.admin.find((e)=> email == e.email && password == e.password);
      if(admin){
        setLoggedInUserData(admin)
        setUser({role:"admin"});
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data:admin }));
      }
    } else if (userData) {
      const employee = userData.employees.find((e)=> email == e.email && password == e.password);
      if(employee){
        setUser({role:"employees"});
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employees", data:employee }));
      }
    } else {
      alert("Invalid Credentials ");
    }
    
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user?.role === "admin" ? <AdminDasboard changeUser={setUser} data={loggedInUserData}/> : (user?.role === 'employees'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
    </>
  );
}

export default App;
