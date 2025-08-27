import React from "react";
import video from "../assets/videos/156444-812591952_medium.mp4";

function BGVideo() {
  return (
    <div className="fixed  top-0 left-0 h-screen w-full">
      <video className="z-0 h-full w-full object-cover" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default BGVideo;
