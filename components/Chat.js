import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";

function Chat() {
  const [show, setShow] = useState(false);
  const scrolled = useRef(false);
  const isMoreThan10 = useRef(true);

  // mengatur waktu cookies dan munculnya subscribe
  useEffect(() => {
    const savedDate = Cookies.get("time");

    if (savedDate) {
      const lastDate = new Date(savedDate).getTime();
      const currentDate = new Date().getTime();

      if ((currentDate - lastDate) / 1000 > 600) {
        isMoreThan10.current = true;
      } else {
        isMoreThan10.current = false;
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });

  // mengatur scroll untuk kapan subscribe keluar dengan membagi tinggi website
  function scrollHandler(e) {
    if (
      isMoreThan10.current &&
      !scrolled.current &&
      window.scrollY > window.innerHeight / 3
    ) {
      scrolled.current = true;
      setShow(true);
      Cookies.set("time", new Date().toISOString());
    }
  }

  return (
    <div>
      <div
        className={`
        fixed bottom-0 right-0 bg-blue w-full  lg:w-1/3 z-40 opacity-75 md:mr-2   transform bg-green-500 transition-all duration-1000
        ${show ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="w-full py-2 px-4">
          <div
            className="text-right cursor-pointer  text-white"
            onClick={() => setShow(false)}
          >
            x
          </div>
          <p className="text-white  font-bold text-sm md:text-xl">
            Get Latest updates in web technologies
          </p>
          <p className="text-white text-xs md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form className="block md:flex items-center">
            <input
              className="w-full lg:w-3/5 px-4 my-4 h-8"
              placeholder="Email Address"
            />
            <button className="bg-white opacity-100 lg:mx-4 w-full lg:w-40 h-8 text-gray-500 hover:text-ijo">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
