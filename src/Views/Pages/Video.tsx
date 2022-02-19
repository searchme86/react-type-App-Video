import React from 'react';
import VideoComp from '../Assets/Components/VideoComp';
import { VideoWrapper, VideoStyle } from '../Assets/Styles/Video.style';

function Video() {
  return (
    <div>
      <VideoWrapper>
        <VideoStyle>
          <VideoComp />
        </VideoStyle>
      </VideoWrapper>
    </div>
  );
}

export default Video;
