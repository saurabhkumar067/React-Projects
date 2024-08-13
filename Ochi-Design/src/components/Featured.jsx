import React from "react";
import Fyde from "../assets/fyde.png";
import Vise from "../assets/vise.jpg";
import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden z-[9] text-[#CDEA68] text-8xl leading-none tracking-tighter  left-full top-1/2 -translate-x-1/2 -translate-y-1/2">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img className="w-full h-full bg-cover " src={Fyde} alt="" />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <h1 className="absolute flex z-[9] text-[#bfcc90] text-8xl leading-none overflow-hidden tracking-tighter  right-full top-1/2 translate-x-1/2 -translate-y-1/2">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src={Vise} alt="" />
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

// 2:40
