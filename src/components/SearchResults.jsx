import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api_params";
import Endpoints from "../Requests";

function SearchResults() {
  let { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  const options = {
    params: { query: searchTerm, geo: "IN", lang: "en" },
    headers: {
      "X-RapidAPI-Key": "87cd7b6490msh470f0ad757f0c66p194294jsne3b80a5b9678",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchData(url) {
      const request = await axios.get(`${BASE_URL}${url}`, options);
      setVideos(request.data.data);
      return request;
    }
    fetchData(Endpoints.search);
  }, [Endpoints.search]);


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


  console.log(videos)

  return (
    <div className="feed absolute top-10 lg:w-[83vw] w-[100%] lg:left-60 left-10 bg-[#f9f9f9] p-7">
      <button className="text-gray-600 mb-1 hover:text-black font-semibold px-3 py-1 rounded-full hover:bg-[#e0e0e0]">
        Icon Filters
      </button>
      <hr />
      <div className="search__cards my-5 w-[73%] space-y-14">
        {videos.map((video)=>(
        <div className="card h-[10rem]" key={video.videoId}>
          <div className="thumbnail__title flex">
            <img
              src={`${video.thumbnail[1].url}`}
              alt=""
              className="w-[360px]"
            />
            <h3 className="text-lg px-3">
              {trim(video.title)}
            </h3>
          </div>
          <div className="relative bottom-44 left-[22.5rem] px-4">
            <div className="view__date flex text-[12px] mb-2 items-center space-x-1 text-[#606060]">
              <p>{ConvertToK(video.viewCount)} views</p>
              <div className="dot w-[3px] h-[2px] rounded-full bg-[#606060]"></div>
              <p>{video.publishedText}</p>
            </div>
            <div className="channel__details flex text-[13px] text-[#606060] my-2 mt-3">
              <img
                src={`${video.channelThumbnail[0].url}`}
                alt=""
                className="w-[24px] h-[24px] rounded-full mr-2"
              />
              <div className="time text-[13px] text-white absolute left-[-3.1rem] top-[153px] px-1 font-semibold">
                {video.lengthText}
              </div>
              <h1>{video.channelTitle}</h1>
            </div>
            <div className="video__desc 120Chars text-[13px] text-[#606060] mt-2">
              <p>
                {video.description}
              </p>
            </div>
          </div>
        </div>

        ))}
      </div>
    </div>
  );
}

export default SearchResults;
