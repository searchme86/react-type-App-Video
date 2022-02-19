import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Video, VideoWrapper } from '../Styles/Video.style';

function VideoComp() {
  return (
    <>
      <VideoWrapper>
        <Video>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=J9wXEA5gOnc"
            controls={true}
            width="800px"
            height="500px"
            playing={true}
            light={false}
            loop={false}
          />
        </Video>
      </VideoWrapper>
    </>
  );
}

export default VideoComp;
