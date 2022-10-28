import React from "react";
import Endpoints from "../Requests";
import "./css/Feed.css";
import Rows from "./HomeRows";

function Feed() {
  return (
    <div className="feed absolute top-16 lg:w-[83vw] w-[100%] lg:left-60 left-10 bg-white">
      {/* Bunch Of Rows */}
      <Rows fetchUrl={Endpoints.suggestedVideos} />
    </div>
  );
}

export default Feed;
