import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

const video = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  );
};

export default video;
