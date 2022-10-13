import React, { useState, useEffect } from "react";
import axios from "axios";
import options, {BASE_URL} from "../api_params";
import Endpoints from "../Requests";
import './css/Rows.css';

function Rows({ fetchUrl }) {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState([]);

  function trim(str){
    return str.substring(0, 50) + '...';
  }

  function ConvertToK(str){
    let startNum = str[0];
    let scndNum = str[1];
    const val = parseInt(str);
    let returnVal = ''
    if(val > 999){
      returnVal = startNum+"."+scndNum+"K";
    }
    else if(val > 999999){
      returnVal = startNum+"."+scndNum+"M";
    }
    else if(val > 999999999){
      returnVal = startNum+"."+scndNum+"B";
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

  // async function fetchChannelData(url, cid) {
  //     const request = await axios.get(`${BASE_URL}${url}`, {
  //       params: {
  //         part: 'snippet,statistics', id: `${cid}`
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': 'ec9e1e9f2amsh64bed796bfd6339p154186jsn52955085b8f2',
  //         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //       }
  //     });
  //     setChannel(request.data.data);
  //     return request;
  //   }

console.log(videos);

  return (
    <div className="Rows">
      <div className="container mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-8">
        {videos.map(
          (video) =>(
              <div className="items w-[300px] h-[260.49px] mb-8 cursor-pointer relative" key={video.videoId}>
              <img
                src={`${video.thumbnail[1].url}`}
                alt={`${video.title}`}
              />
              <div className="time text-[13px] text-white absolute right-0 top-[148px] px-1">
                {video.lengthText}
              </div>
              <div className="details flex my-3">
                <img
                  src={`${video.authorThumbnail[0].url}`}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="flex flex-col mx-4">
                  <p className="font-bold text-sm">
                    {trim(video.title)}
                  </p>
                  <div className="">
                    <p className="text-gray-500 hover:text-black cursor-pointer text-[13px]">
                      {video.channelTitle}
                    </p>
                    <div className="viewsandtime flex items-center space-x-1 text-[12px]">
                      <p className="text-gray-500 cursor-pointer">
                        {ConvertToK(video.viewCount)}
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
            )
        )}
      </div>
    </div>
  );
}

export default Rows;
