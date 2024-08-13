import React, { useRef, useState } from "react";
import Card from "./Card";

function Foregound() {
  const ref = useRef(null);
  const [data, setData] = useState([
    {
      desc: "A front-end developer who is eager to learn, committed to excellence, and passionate about web development.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Give me a chance because I'm committed to delivering high-quality results and always strive to improve my skills to benefit the team.",
      filesize: ".5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "You should hire me because I'm dedicated, skilled, innovative, adaptable, and collaborative.",
      filesize: "1.2mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ]);
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5"
    >
      {data.map((item, index) => {
        return <Card key={index} data={item} reference={ref} />;
      })}
    </div>
  );
}

export default Foregound;
