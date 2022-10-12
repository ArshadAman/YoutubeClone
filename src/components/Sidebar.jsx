import React from "react";
import "./css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar fixed top-10 py-8 w-[15vw] h-[100vh] overflow-y-scroll hidden lg:block">
      <div className="container">
        <div className="one space-y-2 flex flex-col">
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Home
          </button>
          <h1 className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Explore
          </h1>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Shorts
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Subscriptions
          </button>
        </div>

        <hr className="my-2" />

        <div className="two space-y-2 flex flex-col">
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Library
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            History
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Liked Videos
          </button>
        </div>

        <hr className="my-2" />

        <div className="three space-y-2 flex flex-col">
          <h1 className="pl-4 pr-14 py-2 text-[1rem] text-left font-semibond text-gray-600">EXPLORE</h1>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Music
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Gaming
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Live
          </button>
        </div>

        <hr className="my-2" />

        <div className="four space-y-2 flex flex-col">
        <h1 className="focus:bg-[#d9d9d9] pl-4 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            MORE FROM YOUTUBE
          </h1>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            YouTube Premium
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Creator Studio
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md">
            Youtube Music
          </button>
        </div>

        <hr className="my-2" />

        <div className="footer space-y-2 flex flex-col">
          <div className="box grid grid-cols-3 font-bold text-xs px-5 pt-5">
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
          </div>
          <div className="box grid grid-cols-3 font-bold text-xs px-5">
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
