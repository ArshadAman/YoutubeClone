import React, { useState, useEffect } from "react";
import axios from "axios";
import options, { BASE_URL } from "../api_params";
import Endpoints from "../Requests";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Categories from "./Categories";

function Rows({ fetchUrl }) {
  const [videos, setVideos] = useState([]);

  function trim(str) {
    return str.substring(0, 50) + "...";
  }

  function ConvertToK(str) {
    let startNum = str[0];
    let scndNum = str[1];
    const val = parseInt(str);
    let returnVal = "";
    if (val > 999) {
      returnVal = startNum + "." + scndNum + "K";
    } else if (val > 999999) {
      returnVal = startNum + "." + scndNum + "M";
    } else if (val > 999999999) {
      returnVal = startNum + "." + scndNum + "B";
    }
    return returnVal;
  }

  useEffect(() => {
    async function fetchData(url) {
      const request = await axios.get(`${BASE_URL}${url}`, options);
      setVideos(request.data.data);
      return request;
    }
    fetchData(fetchUrl);
  }, [fetchUrl]);

  return (
    <div className="Rows">
      <Sidebar />
      <Categories/>
      <div className="container mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-8">
        {videos.map((video) => (
          <>
            <Link to={`/watch/${video.videoId}`}>
              <div
                className="items w-[300px] h-[260.49px] mb-8 cursor-pointer relative"
                key={video.videoId}
              >
                <img src={`${video.thumbnail[1].url}`} alt={`${video.title}`} className="rounded-lg" />
                <div className="time text-[12px] text-white absolute right-1 top-[145px] px-1 font-bold rounded-md bg-black">
                  {video.lengthText}
                </div>
                <div className="details flex my-3">
                  <Link to="Channel Details" className="w-[43px] h-[0px]">
                    <img
                      src={`${video.authorThumbnail ? video.authorThumbnail[0].url : "https://banner2.cleanpng.com/20180604/cio/kisspng-user-profile-avatar-computer-icons-google-account-5b1571035447a7.6413663015281318433452.jpg"}`}
                      alt=""
                      className="rounded-full max-h-[43px] max-w-[43px]"
                    />
                  </Link>
                  <div className="flex flex-col mx-4">
                    <p className="font-bold text-sm">{trim(video.title)}</p>
                    <div className="">
                      <Link to="ChannelDetails">
                        <p className="text-gray-500 hover:text-black cursor-pointer text-[13px]">
                          {video.channelTitle}
                        </p>
                      </Link>
                      <div className="viewsandtime flex items-center space-x-1 text-[12px]">
                        <p className="text-gray-500 cursor-pointer">
                          {video.viewCount ? ConvertToK(video.viewCount): "1000"}
                        </p>
                        <div className="dot w-1 h-1 rounded-full bg-gray-500"></div>
                        <p className="text-gray-500 cursor-pointer">
                          {video.publishedTimeText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default Rows;
