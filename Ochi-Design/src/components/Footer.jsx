import React from "react";

function Footer() {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900 p-20 font-sans">
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <div className="headi">
          <h1 className="text-[6.5vw] font-bold uppercase leading-none -mb-4 ">
            Eye-
          </h1>
          <h1 className="text-[6.5vw] font-bold uppercase leading-none -mb-4 ">
            Opening
          </h1>
        </div>
        <div className="">Ochi</div>
      </div>
      <div className="w-1/2">
     <h1 className="text-[6vw] font-bold uppercase leading-none -mb-4 ">
      Presentations
          </h1>
      <div className="dets mt-10">
        {["Facebook", "Instagram","Twitter"].map((item, index)=><a key={index} className="block text-2xl font-light" href="#">{item}</a>)}
      </div>
      </div>
    </div>
  );
}
export default Footer;
