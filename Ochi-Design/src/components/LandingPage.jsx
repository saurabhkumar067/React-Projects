import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textstructure mt-44 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[5vw] rounded-md relative bg-yellow-300 mr-[1vw]"
                  ></motion.div>
                )}
                <h1 className="uppercase -mb-[.5vw] leading-[6.5vw] tracking-tighter font-medium text-[7.5vw] font-['Founders_Grotesk_X-Condensed']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light uppercase text-md">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-400">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
