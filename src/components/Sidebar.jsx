import React from "react";
import "./css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar fixed top-10 py-8 w-[15vw] h-[100vh] overflow-y-scroll hidden lg:block">
      <div className="container">
        <div className="one space-y-2 flex flex-col">
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="" className="w-[20px] h-[20px] mr-2" /> Home
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
           <img src="https://cdn-icons-png.flaticon.com/512/795/795653.png" alt="" className="w-[20px] h-[20px] mr-2" /> Explore
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
           <img src="https://cdn-icons-png.flaticon.com/512/8669/8669536.png" alt="" className="w-[20px] h-[20px] mr-2" /> Subscriptions
          </button>
        </div>

        <hr className="my-2" />

        <div className="two space-y-2 flex flex-col">
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
           <img src="https://cdn-icons-png.flaticon.com/512/2859/2859706.png" alt="" className="w-[20px] h-[20px] mr-2" /> Library
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
           <img src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png" alt="" className="w-[20px] h-[20px] mr-2" /> History
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
           <img src="https://cdn-icons-png.flaticon.com/512/126/126473.png" alt="" className="w-[20px] h-[20px] mr-2" /> Liked Videos
          </button>
        </div>

        <hr className="my-2" />

        <div className="three space-y-2 flex flex-col">
          <h1 className="pl-4 pr-14 py-2 text-[1rem] text-left font-semibond text-gray-600">EXPLORE</h1>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
           <img src="https://cdn-icons-png.flaticon.com/512/5649/5649349.png" alt="" className="w-[20px] h-[20px] mr-2" /> Music
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
           <img src="https://cdn-icons-png.flaticon.com/512/686/686589.png" alt="" className="w-[20px] h-[20px] mr-2" /> Gaming
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 pr-14 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
           <img src="https://cdn-icons-png.flaticon.com/512/2989/2989838.png" alt="" className="w-[20px] h-[20px] mr-2" /> Live
          </button>
        </div>

        <hr className="my-2" />

        <div className="four space-y-2 flex flex-col">
        <h1 className="pl-4  py-2 text-[1rem] text-left font-semibond text-gray-600">
            MORE FROM YOUTUBE
          </h1>
          <button className="focus:bg-[#d9d9d9] pl-8  py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
           <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" className="w-[20px] h-[20px] mr-2" /> YouTube Premium
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3938/3938026.png" alt="" className="w-[20px] h-[20px] mr-2" />Creator Studio
          </button>
          <button className="focus:bg-[#d9d9d9] pl-8 py-2 focus:font-bold hover:bg-gray-100 text-left text-md flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" alt="" className="w-[20px] h-[20px] mr-2" />
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
