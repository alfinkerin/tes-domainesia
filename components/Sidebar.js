import React from "react";

function Sidebar() {
  return (
    <div className="absolute hidden md:block bulatan block self-center">
      <div className="rounded-full border-2 border-black border-opacity-50 h-6 w-6 cursor-pointer bg-ijo" />
      <div className="w-full">
        <div className="line" />
      </div>

      <div className="rounded-full border-2 border-black border-opacity-50 h-6 w-6 cursor-pointer bg-white" />
      <div className="line" />
      <div className="rounded-full border-2 border-black border-opacity-50 h-6 w-6 cursor-pointer bg-white" />
      <div className="line" />
      <div className="rounded-full border-2 border-black border-opacity-50 h-6 w-6 cursor-pointer bg-white" />
    </div>
  );
}

export default Sidebar;
