import React from "react";
import Academy from '../assets/academy.png'
import Cluthe from '../assets/cluthe.svg'
import Ochi from '../assets/Ochi-Logo.svg'

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 items-center px-28 flex gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src={Ochi}
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 rounded-full py-1 border-2">
            &copy;-2019
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#051a16]">
          <img
            className="w-32"
            src={Cluthe}
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 rounded-full py-1 border-2">
            &copy;-2019
          </button>
        </div>
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#051a16]">
          <img
            className="w-32"
            src={Academy}
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 rounded-full py-1 border-2">
            &copy;-2019
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
