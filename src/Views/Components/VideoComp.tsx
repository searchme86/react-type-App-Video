import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ProgressBar from '@ramonak/react-progress-bar';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { IoMdRefreshCircle } from 'react-icons/io';
import Toggle from './ToggleFunc/Toggle';
import ClipboardCon from '../../Store/Containers/ClipboardCon';

// import ProgrBar from './ProgressFunc/ProgressBar';
import {
  Urlholder,
  VideoBtn,
  VideoBtnArea,
  VideoControlBox,
  VideoController,
  VideoHandle,
  VideoPlayer,
  VideoRange,
  VideoToggleArea,
  VideoWrapper,
} from '../Assets/Styles/Video.style';
import { TextHidden } from '../Assets/Styles/Common.style';
import { IconContext } from 'react-icons/lib';

// const selectVideo = (index: number) => {
//   setPlayIndex(index);
// };

// console.log('titleofYouTube', idOfVideo);

interface lPlayInfo {
  idx: number;
  url: string;
}

function VideoComp() {
  const playerSize = {
    wd: '480px',
    ht: '400px',
  };

  const playlist = [
    { idx: 0, url: 'https://www.youtube.com/watch?v=Rq5SEhs9lws' },
  ];

  const toggleControl = {
    label: '컨트롤바',
    labelFor: 'label-control',
    optionsLabels: ['적용', '미적용'],
  };

  const toggleLoop = {
    label: '반복재생',
    labelFor: 'label-Loop',
    optionsLabels: ['적용', '미적용'],
  };

  const [url, setUrl] = useState(null);
  const [cplayed, setCplayed] = useState(0);
  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [control, setControl] = useState(false);
  const [playIndex, setPlayIndex] = useState(0);

  const ref = useRef(null);
  const ToggleLoopRef = useRef<HTMLInputElement>(null);
  const ToggleControlRef = useRef<HTMLInputElement>(null);

  const getPlayData = (playData: lPlayInfo[]) => {
    const [{ url }] = playData;
    setUrl(url);
  };

  const handlePlay = () => {
    setPlay(true);
  };

  const handlePause = () => {
    setPlay(false);
  };

  const handleRefresh = () => {
    setCplayed(0);
    setPlay(false);
    setUrl(null);
  };

  const handleLoop = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoop(e.currentTarget.checked);
  };

  const handleControl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setControl(e.currentTarget.checked);
    setUrl(null);
    setCplayed(0);
  };

  const handleNextVideo = (video: string | any[], playIndex: number) => {
    if (playIndex === video.length - 1) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  };

  const inputRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCplayed(0);
    setCplayed(Number(event.currentTarget.value));
    ref.current.seekTo(cplayed);
  };

  useEffect(() => {
    getPlayData(playlist);
    return () => {
      getPlayData(playlist);
    };
  }, [playlist, url]);

  console.log('cplayed', cplayed * 100);
  console.log('url', url);

  if (playlist === null) return <p>Loading...</p>;

  return (
    <>
      <VideoWrapper>
        <VideoPlayer>
          <ReactPlayer
            className="react-player"
            ref={ref}
            width={playerSize.wd}
            height={playerSize.ht}
            url={url}
            playing={play}
            loop={loop}
            controls={control}
            light={false}
            muted={false}
            onEnded={() => handleNextVideo(playlist, playIndex)}
          />
        </VideoPlayer>
        <VideoHandle>
          <ProgressBar
            completed={Math.round(cplayed * 100)}
            maxCompleted={100}
          />
          <VideoControlBox>
            <Urlholder>
              <ClipboardCon />
            </Urlholder>
            <VideoController>
              <VideoBtnArea>
                <IconContext.Provider value={{ size: '50px' }}>
                  <VideoBtn>
                    <TextHidden>영상 플레이 버튼</TextHidden>
                    <AiFillPlayCircle onClick={handlePlay} />
                  </VideoBtn>
                  <VideoBtn>
                    <TextHidden>영상 정지 버튼</TextHidden>
                    <AiFillPauseCircle onClick={handlePause} />
                  </VideoBtn>
                  <VideoBtn>
                    <TextHidden>영상 다시 시작버튼</TextHidden>
                    <IoMdRefreshCircle onClick={handleRefresh} />
                  </VideoBtn>
                </IconContext.Provider>
              </VideoBtnArea>
              <VideoToggleArea>
                <Toggle
                  toggleInfo={toggleControl}
                  handleToggle={handleControl}
                  toggle={control}
                  inputRef={ToggleControlRef}
                />
                <Toggle
                  toggleInfo={toggleLoop}
                  handleToggle={handleLoop}
                  toggle={loop}
                  inputRef={ToggleLoopRef}
                />
              </VideoToggleArea>
            </VideoController>
            <VideoRange>
              <input
                type="range"
                min={0}
                max={0.999999}
                step="any"
                value={cplayed}
                onChange={inputRange}
                style={{ display: 'block', width: '100%' }}
              />
            </VideoRange>
          </VideoControlBox>
        </VideoHandle>
      </VideoWrapper>
    </>
  );
}

export default VideoComp;
