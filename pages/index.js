// import dari component
import React, { useEffect } from "react";
import Chat from "../components/Chat";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import Home from "../assets/home.svg";
import Sidebar from "../components/Sidebar";
import Home2 from "../assets/home2.svg";
import Sidebar2 from "../components/Sidebar2";
// menggunakan modul aos
import AOS from "aos";

function index() {
  // menggunakan react hooks untuk mengupdate sama seperti didmount atau willmount
  useEffect(() => {
    // mengambil dari modul aos dan mengatur durasi untuk useeffect
    AOS.init({
      offset: 200,
      duration: 2000,
    });
  }, []);
  return (
    <div className="w-full ">
      <Header />
      <Fotter />
      <Chat />
      <div className="w-full relative px-2 md:px-16 h-screen md:flex  pt-40">
        <div className="block md:hidden w-full self-center  ">
          <Home />
        </div>
        <div className="w-full md:w-2/5 mt-16 md:mt-20 self-center">
          <p className=" text-3xl md:text-2xl text-center md:text-left font-bold">
            Lorem Ipsum is simply dummy text of the printing and
            typesettingindustry.
          </p>
          <div className="flex justify-between">
            <button className="w-1/2 mx-2 md:mx-0 md:w-40 xl:w-48 mt-4  bg-merah text-white text-xs xl:text-lg font-bold py-2 px-4 rounded">
              Lorem
            </button>
            <button className="w-1/2 mx-2 md:mx-0 md:w-40 xl:w-48 mt-4  bg-dark text-white text-xs xl:text-lg font-bold py-2 px-4 rounded">
              Lorem
            </button>
          </div>
        </div>
        <div className="hidden md:block w-3/5 self-center  lg:pt-8 xl:pt-0">
          <Home />
        </div>
        <Sidebar />
      </div>
      <div className="w-full px-16 h-screen flex bg-dark  pt-40">
        <Sidebar2 />
        <div className="w-3/5">
          {/* data aos berasal dari modul aos tinggal memasukan aja effect yg mau di pilih */}
          <Home2 data-aos="fade-down" />
        </div>
        <div className="pt-16 w-2/5">
          <div
            data-aos="fade-up"
            className="  text-white md:text-md xl:text-xl font-bold"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </div>
          <div data-aos="fade-up" className="text-white text-xs mt-4">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </div>
          <div className=" text-right">
            <button
              data-aos="fade-right"
              className="lg:w-40 xl:w-48 mt-4  bg-merah text-white text-xs xl:text-lg font-bold py-2 px-4 rounded"
            >
              Lorem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
