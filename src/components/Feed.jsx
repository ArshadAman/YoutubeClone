import React from "react";
import './css/Feed.css';
import Rows from "./Rows";

function Feed() {
  return (
    <div className="feed absolute top-16 lg:w-[83vw] w-[100%] lg:left-60 left-10 bg-white">
      <div className="categories">
        <hr className="my-2 lg:w-full w-[90%]" />
        <div className="items space-x-4 lg:w-[100%] w-[80%] overflow-x-scroll flex items-baseline cursor-pointer">
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            All
          </button>
          <button className="bg-gray-200 px-1 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            ComputerProgramming
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Laptops
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Apple
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Live
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Mixes
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Comedy
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Music
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Motivation
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Economics
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Anime
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Cricket
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            React.js
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            WebDevelopment
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-full focus:bg-black focus:text-white hover:bg-gray-300 text-[14px] border border-gray-400">
            Gaming
          </button>
        </div>
        <hr className="my-2 lg:w-full w-[90%]" />
      </div>

      {/* Bunch Of Rows */}
      <Rows />
    </div>
  );
}

export default Feed;
