import React from "react";

function Menu({ onSelectVideo, videoValues }) {
  return (
    <div>
      <form onClick={(e) => onSelectVideo(e.target.value)}>
        {videoValues.map((value, i) => (
          <div className="video-inputs">
            <input key={i} type="radio" name="src" value={value} />
            {value}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Menu;
