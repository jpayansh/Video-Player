import React from "react";

function Video({ videoSrc }) {
  return (
    <div>
      <video
        loop
        controls
        autostart="true"
        autoPlay
        muted
        src={videoSrc}
      ></video>
    </div>
  );
}

export default Video;
