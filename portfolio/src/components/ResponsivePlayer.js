import React from "react";
import ReactPlayer from "react-player";

import "./ResponsivePlayer.css";


const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://player.vimeo.com/video/708876679?h=3568d421d8"
        width="100%"
        height="100%"
        loop={true}  
      playing={true}
      />
    
    </div>
  );
};

export default ResponsivePlayer;
