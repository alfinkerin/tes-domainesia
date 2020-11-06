// import dari component
import React, { useEffect, useState } from "react";
import Chat from "../components/Chat";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import Home from "../assets/home.svg";
import Sidebar from "../components/Sidebar";
import Home2 from "../assets/home2.svg";
import Sidebar2 from "../components/Sidebar2";
// menggunakan modul aos
import AOS from "aos";
import { hosting } from "./api/hosting";
import Sidebar3 from "../components/Sidebar3";
import next from "next";
import Sidebar4 from "../components/Sidebar4";
import Head from "next/head";

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
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="tes domainesia"
          content="ini adalah tes masuk untuk domainesia, semoga saya bisa masuk tahap selanjutnya"
        />
        <title>Tes Dominisia</title>
        <link rel="shortcut icon" href="/fav.ico"></link>
      </Head>
      <Header />
      <Fotter />
      <Chat />
      <div
        id="home"
        className="w-full relative px-2 md:px-16 h-screen md:flex  pt-40"
      >
        <div className="block sm:w-2/3 md:hidden w-full self-center  ">
          <Home />
        </div>
        <div className="w-full md:w-2/5 mt-16 md:mt-20 self-center">
          <p className=" text-xl md:text-2xl text-center md:text-left font-bold">
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
      <div
        id="about"
        className="w-full px-2 md:px-16 h-screen block md:flex bg-dark py-6  md:pt-40"
      >
        <Sidebar2 />
        <div className="w-full pt-4 md:w-3/5">
          {/* data aos berasal dari modul aos tinggal memasukan aja effect yg mau di pilih */}
          <Home2 data-aos="fade-down" />
        </div>
        <div className="pt-16 w-full md:w-2/5">
          <div
            data-aos="fade-up"
            className="  text-white md:text-md xl:text-xl font-bold"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </div>
          <div data-aos="fade-up" className="text-white text-xs  mt-4">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy.
          </div>
          <div className=" text-right">
            <button className=" w-full lg:w-40 xl:w-48 mt-4  bg-merah text-white text-xs xl:text-lg font-bold py-2 px-4 rounded">
              Lorem
            </button>
          </div>
        </div>
      </div>

      <div
        id="hosting"
        style={{ backgroundImage: "url('bg.png')", height: "auto" }}
        className="w-full relative py-16 section3 px-2 md:px-16 h-screen md:flex "
      >
        <Sidebar3 />
        {hosting.map((host, i) => (
          <div className="border-none w-full md:w-1/3 md:h-auto my-8 md:my-0  bg-white transition duration-500 ease-in-out cursor-pointer  transform hover:-translate-y-1 hover:scale-110 rounded md:mx-4  border-4 shadow-2xl">
            <ul className=" pb-6 pt-12">
              <li className="w-full h-auto text-3xl md:text-4xl xl:text-5xl font-bold text-white text-center bg-dark ">
                {host.title}
              </li>
              <li className="text-center text-2xl my-2 md:text-3xl xl:text-4xl">
                {host.harga}
              </li>
              <li className="px-8 md:px-10 xl:px-16 text-lg md:text-xl font-thin xl:text-2xl  text-center">
                {host.content}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div
        id="partner"
        className="w-full relative py-10 justify-between section3  px-2 md:px-32 h-screen md:flex md:flex-wrap "
      >
        <Sidebar4 />
        <img
          alt="test domainesia"
          className="w-full my-8 md:my-0 md:w-56 md:h-56 md:mx-2 xl:mx-6"
          src="/bmw.png"
        />
        <img
          alt="test domainesia"
          className="w-full my-8 md:my-0 md:w-56 md:h-56 md:mx-2 xl:mx-6"
          src="/steam.png"
        />
        <img
          alt="test domainesia"
          className="w-full my-8 md:my-0 md:w-56 md:h-56 md:mx-2 xl:mx-6"
          src="/chev.png"
        />
        <img
          alt="test domainesia"
          className="w-full my-8 md:my-0 md:w-56 md:h-56 md:mx-2 xl:mx-6"
          src="/toyota.png"
        />
        <img
          alt="test domainesia"
          className="w-full my-8 md:my-0 md:w-56 md:h-56 md:mx-2 xl:mx-6"
          src="/samsung.png"
        />
        <img
          alt="test domainesia"
          className="w-full my-8 md:my-0 md:w-56 md:h-56 md:mx-2 xl:mx-6"
          src="/osu.png"
        />
      </div>
    </div>
  );
}

// simulasi fetching data api React.js
// 1.membuat state
// const [post, setPost] = useState([])
// 2. mengupdate data dengan useEffect
// useEffect(()=> {
//  gunakan fetching dari javascript atau bisa menggunakan axios

// })
// 3. maping

// simulasi fetching api next.js

// 2. masukan nilai props dan maping
// function index({ posts }) {
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li>{post.title}</li>
//       ))}
//     </ul>
//   )
// }

// step 1. menggunakan getStaticprops dan async untuk mengambil data
// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default index;
