import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api_params";
import Endpoints from "../Requests";
import axios from "axios";

function VideoView() {
  let { id } = useParams();
  const [video, setVideo] = useState([]);
  const options = {
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": "87cd7b6490msh470f0ad757f0c66p194294jsne3b80a5b9678",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };
  //Getting the video details
  useEffect(() => {
    async function fetchData(url) {
      const request = await axios.get(`${BASE_URL}${url}`, options);
      setVideo(request.data);
      return request;
    }
    fetchData(Endpoints.videoDetail);
  }, []);

  // console.log(video.keywords[0]);

  return (
    <div className="flex justify-between items-center my-20">
      <div className="left mx-16">
        <div className="iframe__youtube__link">
          <iframe
            width="853.33"
            height={480}
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder={0}
            allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`}
            allowFullScreen={true}
          />
        </div>
        <span>
          <small className="mx-1 text-blue-800">
            {/* <a href="">{video.keywords[0]}</a> <a href="">{video.keywords[1]}</a> <a href="">{video.keywords[2]}</a> */}
            <a href="">tags1</a>
          </small>
          <h1 className="text-lg font-semibold mb-3 mx-1">{video.title}</h1>
          <div className="chhanelDetails">
            <div className="flex justify-center space-x-8">
              <div className="channel__things flex space-x-1">
                <img
                  src="https://banner2.cleanpng.com/20180604/cio/kisspng-user-profile-avatar-computer-icons-google-account-5b1571035447a7.6413663015281318433452.jpg"
                  alt=""
                  className="max-h-[43px] max-w-[43px]"
                />
                <h4 className="text-lg font-semibold">{video.channelTitle}</h4>
              </div>
              <button className="share bg-gray-200 hover:bg-[#e5e5e5] px-4 py-1 rounded-full">Share</button>
            </div>
          </div>
        </span>
      </div>
      <div className="right fixed right-0"></div>
    </div>
  );
}

export default VideoView;
