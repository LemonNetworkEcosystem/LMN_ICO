import React from "react";
import ReactPlayer from "react-player";
import { links } from "../../../meta/links";
import "./Video.css";

const video = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <ReactPlayer
        url={links.video_web}
        config={{
          youtube: {
            playerVars: { showinfo: 0 },
          },
          // facebook: {
          //   appId: "12345",
          // },
        }}
      />
    </div>
  );
};

export default video;
