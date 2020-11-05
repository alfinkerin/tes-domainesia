import React, { useState } from "react";
import Logo from "../assets/logo2.svg";
import { menus } from "../pages/api/menu";
import Menu from "../assets/menu.svg";

function Header() {
  const [mobile, setMobile] = useState(false);
  // menggunakan hook pada React, untuk mengatur dan mendapatkan nilai dari state
  const [notif, setNotif] = useState(true);
  return (
    <div>
      <div className="w-full fixed z-50">
        {/* membuat kondisi css dengan javascript, jika true makan memakai kondisi kedua, jika false maka memaikai kondisi pertama, dikondisi pertama di haruskan bernilai sesama false */}
        <div
          className={`${
            !notif && "transform -translate-y-48 -mb-24 md:-mb-12 "
          }: "transition-all duration-1000  w-full block px-2  md:flex justify-center py-2 bg-ijo " `}
        >
          <div className="self-center text-sm md:text-sm xl:text-lg text-white">
            Dapatkan promo bulan November 30% dengan membeli paket di bawah
          </div>
          <button
            onClick={() => setNotif(false)}
            className="md:mx-4 mt-2 md:mt-0  bg-white text-dark text-xs font-bold py-2 px-4 rounded"
          >
            Get it now !
          </button>
        </div>
        <div className="w-full justify-between flex bg-white shadow-xl px-4 md:px-16 ">
          <Logo className="w-16 py-2" />

          <div className="hidden md:block self-center font-semibold text-dark text-2xl ml-2">
            Your
          </div>
          <div className="hidden md:block self-center font-semibold text-ijo text-2xl ml-2">
            Name
          </div>
          <div className="w-full self-center hidden md:block">
            <div className="w-full flex justify-end  ">
              {/* memakai cara maping untuk menampilkan isi array tersebut */}
              {menus.map((g, i) => (
                <ul className="" key={i}>
                  <li className="mx-8 font-semibold text-lg cursor-pointer hover:text-gray-500">
                    {g.name}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          {/* menu mobile */}
          <div className=" self-center md:hidden block">
            <Menu onClick={() => setMobile(true)} className="w-8" />
          </div>
        </div>
      </div>
      <div
        className={
          mobile
            ? "fixed z-50 w-full h-screen bg-gradient-to-b from-green-400 to-green-200"
            : "hidden"
        }
      >
        <div
          onClick={() => setMobile(false)}
          className="absolute burger text-white text-4xl"
        >
          X
        </div>
        <div className="w-full  h-screen text-center pt-32  ">
          {/* memakai cara maping untuk menampilkan isi array tersebut */}
          {menus.map((g, i) => (
            <ul className="" key={i}>
              <li className="my-6 text-white font-semibold text-4xl ">
                {g.name}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
