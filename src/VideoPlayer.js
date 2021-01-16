import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "videojs-landscape-fullscreen";

function VideoPlayer({ source, poster }) {
  const videoNode = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    console.log(videoNode, player);
    player.current = videojs(videoNode.current, {
      controls: true,
      autoplay: true,
      poster: poster,
      fill: true,
      fluid: true,
      preload: "auto"
    });
    player.current.src({ type: "application/dash+xml", src: source });

    player.current.landscapeFullscreen({
      fullscreen: {
        enterOnRotate: true,
        alwaysInLandscapeMode: true,
        iOS: true
      }
    });
    return () => player.current.dispose();
  }, [source, poster]);
  return (
    <div>
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
}

export default VideoPlayer;
