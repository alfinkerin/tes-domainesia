import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { menus } from "../pages/api/menu";

function Header() {
  const [notif, setNotif] = useState(true);
  return (
    <div>
      <div className="w-full fixed">
        <div
          className={`${
            !notif && "transform -translate-y-48  -mb-12 "
          }: "transition-all duration-1000  w-full  flex justify-center py-2 bg-ijo " `}
        >
          <p className="self-center text-white">
            Dapatkan promo bulan November 30% dengan membeli paket di bawah
          </p>
          <button
            onClick={() => setNotif(false)}
            className="mx-4  bg-white text-dark text-xs font-bold py-2 px-4 rounded"
          >
            Get it now !
          </button>
        </div>
        <div className="w-full flex bg-white shadow-xl px-16 ">
          <Logo className="w-1/12" />
          <div className="w-full flex justify-end items-center ">
            {menus.map((g, i) => (
              <ul className="" key={i}>
                <li className="mx-4">{g.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
