import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

function Login({handleLogin}) {  
  const ref = useRef();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setLoginUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginUser.email, loginUser.password)
  };

  const handleShowPassword = () => {
    if (ref.current.value !== "") {
      const refValue = ref.current;
      refValue.type = refValue.type === "password" ? "text" : "password";
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="border-2 border-zinc-600 py-5 px-4 xl:w-1/4 lg:w-1/3 rounded-xl md:w-2/5 sm:w-1/2 min-[320px]:w-[90%] h-[90%]">
          <h1 className="text-2xl font-semibold tracking-wide">Log In</h1>
          <form className="lg:mt-36  min-[320px]:mt-32 min-[320px]:mb-0" onSubmit={handleSubmit}>
            <div>
              <div className="emailInput flex justify-center items-center border-zinc-700 border p-2 gap-3 rounded-full">
                <span>
                  <FaUserCircle />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full  bg-transparent text-white border-none outline-none"
                  value={loginUser.email}
                  onChange={handleInputChange}
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="passwordInput flex justify-center items-center border-zinc-700 border p-2 gap-3 rounded-full my-4">
                <span>
                  <FaLock />
                </span>
                <input
                  ref={ref}
                  type="password"
                  placeholder="Password"
                  className="w-full  bg-transparent text-white border-none outline-none"
                  value={loginUser.password}
                  onChange={handleInputChange}
                  name="password"
                  id="password"
                  required
                />
                <label
                  htmlFor=""
                  className="pr-2 text-xs text-zinc-300 tracking-wide cursor-pointer"
                  onClick={handleShowPassword}
                >
                  Show
                </label>
              </div>
              <div className=" flex justify-between items-center text-sm mx-4">
                <div>
                  <input
                    type="checkbox"
                    className=" mr-2"
                    id="rememeberMe"
                    name="rememeberMe"
                  />
                  <label htmlFor="rememeberMe">Rememeber me</label>
                </div>
                <a href="" className="text-zinc-400">
                  Forget Password
                </a>
              </div>
              <button
                type="submit"
                className="w-full rounded-full text-center py-2 md:mt-10  min-[320px]:mt-14 text-xl bg-red-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
