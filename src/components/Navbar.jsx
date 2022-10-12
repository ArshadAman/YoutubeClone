import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex justify-between pt-1 px-6 fixed top-0 left-0 right-0 z-20 bg-white">
        <div className="left flex justify-center items-center space-x-5">
          <button className="hamburgur flex flex-col cursor-pointer">
            <div className="one w-[20px]  h-[1.5px] mt-1 bg-black"></div>
            <div className="two w-[20px] h-[1.5px] mt-1 bg-black"></div>
            <div className="three w-[20px] h-[1.5px] mt-1 bg-black"></div>
          </button>
          <img
            src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
            alt=""
            className="w-[120px] h-[56px] cursor-pointer"
          />
        </div>

        <div className="middle flex items-center">
          <input
            type="text"
            name=""
            id=""
            className="border-gray-400 border-l border-t border-b w-[30vw] px-3 py-2 focus:outline-blue-500 "
            placeholder="Search"
          />
          <div className="search py-1 px-4 h-[75%] bg-[#f0f0f0] cursor-pointer flex items-center border-gray-400 border">
            <i class="fas fa-lg fa-search"></i>
          </div>
          <div className="Vsearch py-1 px-4 flex items-center h-[80%] bg-[#f9f9f9] rounded-full ml-5 cursor-pointer">
            <i class="fas fa-microphone"></i>
          </div>
        </div>

        <div className="right flex items-center">
          <button className="dots flex flex-col">
            <div className="dot h-1 w-1 bg-black rounded-full"></div>
            <div className="dot h-1 w-1 bg-black rounded-full mt-0.5"></div>
            <div className="dot h-1 w-1 bg-black rounded-full mt-[0.9px]"></div>
          </button>
          <div className="Vsearch rounded-full ml-5 cursor-pointer">
            <img
              src="https://www.seekpng.com/png/full/144-1449257_youtuber-avatar.png"
              alt=""
              className="h-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
