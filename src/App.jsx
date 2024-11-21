import React, { useState, useEffect } from "react";
import image1 from "./assets/bg-jungle.jpg";
import image2 from "./assets/bird1.jpg";
import image3 from "./assets/food2.jpg";
import image4 from "./assets/food4.jpg";
import image5 from "./assets/forest.jpg";
import image6 from "./assets/tree1.jpg";

function App() {
  let imgArr = [image1, image2, image3, image4, image5, image6];
  let [currIndex, setCurrIndex] = useState(0);

  function handleClick(prop) {
    if (prop === "increase" && currIndex === 5) return;
    if (prop === "decrease" && currIndex === 0) return;
    if (prop === "increase") setCurrIndex(currIndex + 1);
    else setCurrIndex(currIndex - 1);
  }

  


  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl font-extrabold text-center px-5 py-3 text-white">
        Lemonzy🍋 : Image - Slider
      </h1>
      <div className="w-3/5 h-3/5 rounded-md backdrop-blur-md border overflow-hidden">
        <img
          src={imgArr[currIndex]}
          alt="logo"
          className="bg-cover opacity-50 w-full"
        />
      </div>
      <div className="border px-5 py-3 w-1/2 flex justify-around rounded-full bg-transparent backdrop-blur-md">
        <button
          className="text-5xl transition-all transform hover:scale-125 duration-300"
          onClick={() => handleClick("decrease")}
        >
          {currIndex === 0 ? " " : "⬅️"}
        </button>
        <button
          className="text-5xl transition-all transform hover:scale-125 duration-300"
          onClick={() => handleClick("increase")}
        >
          {currIndex === 5 ? " " : "➡️"}
        </button>
      </div>
    </div>
  );
}

export default App;
