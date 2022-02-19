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
      <p>비디오를 틀어서 볼 수 있는 페이지 입니다.</p>
      <p>다른 내용을 가지고 와서 실행하는 공간입니다</p>
    </div>
  );
}

export default Video;
