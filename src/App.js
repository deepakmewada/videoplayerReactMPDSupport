import React from 'react';
import "video.js/dist/video-js.css"
import './App.css';
import VideoPlayer from './VideoPlayer';

const App = () => {

 const dashUrl = "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd";
 const posterLink = "https://i.ytimg.com/vi/0U8zIu3KjKw/maxresdefault.jpg";

 return (
    <div className="App">
      <VideoPlayer source={dashUrl} poster={posterLink}/>
    </div>
  );
}

export default App;
