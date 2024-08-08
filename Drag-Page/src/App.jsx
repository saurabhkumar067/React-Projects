import React from "react";
import Background from "./components/Background";
import Foregound from "./components/Foregound";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foregound />
    </div>
  );
}

export default App;
