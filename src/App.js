import "./App.css";
import { useState } from "react";
import Menu from "./Menu";
import Video from "./Video";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};
const videoNames = Object.keys(videos);

function App() {
  const [videoSrc, setVideoSrc] = useState(videos.spider);
  function onSelectVideo(video) {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }
  return (
    <div className="App">
      <h1>Project 6: Video Player</h1>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
      <Video videoSrc={videoSrc} />
    </div>
  );
}

export default App;
