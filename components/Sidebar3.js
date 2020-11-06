import React from "react";

function Sidebar3() {
  return (
    <div className="absolute hidden md:block bulatan block self-center">
      <a href="#home">
        <div className="rounded-full border-2 border-black border-opacity-50 h-6 w-6 cursor-pointer bg-white" />
      </a>

      <div className="w-full">
        <div className="line" />
      </div>

      <a href="#about">
        <div className="rounded-full border-2 border-black border-opacity-50 h-6 w-6 cursor-pointer bg-white" />
      </a>

      <div className="line" />
      <a href="#hosting">
        <div className="rounded-full border-2 border-black border-opacity-50 h-6 w-6 cursor-pointer bg-ijo" />
      </a>

      <div className="line" />
      <a href="#partner">
        <div className="rounded-full border-2 border-black border-opacity-50 h-6 w-6 cursor-pointer bg-white" />
      </a>
    </div>
  );
}

export default Sidebar3;
