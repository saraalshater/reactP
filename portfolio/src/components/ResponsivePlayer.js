import React from "react";
import ReactPlayer from "react-player";

import "./ResponsivePlayer.css";


const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/R1NFnhfo0xc"
        width="100%"
        height="100%"
        loop={true}  
      playing={true}
      />
    
    </div>
  );
};

export default ResponsivePlayer;
