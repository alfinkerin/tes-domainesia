import React from "react";
import Chat from "../components/Chat";
import Fotter from "../components/Fotter";
import Header from "../components/Header";

function index() {
  return (
    <div className="w-full ">
      <Header />
      <Fotter />
      <Chat />
      <div className="w-full px-16 h-screen flex  pt-40">
        <div className="w-1/2">aaaaa</div>
        <div className="w-1/2">aaaaa</div>
      </div>
      <div className="w-full px-16 h-full flex bg-dark  pt-40">
        <div className="w-1/2">aaaaa</div>
        <div className="w-1/2">aaaaa</div>
      </div>
    </div>
  );
}

export default index;
