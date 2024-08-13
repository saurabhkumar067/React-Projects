import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/Ochieyes.jpg";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerWidth / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll data-scroll-speed="-.7" className="relative w-full h-full border-2 bg-red-500 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-[70%] h-[70%] rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-[70%] h-[70%] rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line  w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className=" w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
