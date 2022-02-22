import React, { useState, useRef, useEffect, useMemo } from 'react';
import ReactPlayer from 'react-player';
import ProgressBar from '@ramonak/react-progress-bar';
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa';
import Toggle from './ToggleFuc/Toggle';
import CounterContainers from '../../../Store/Containers/CounterContainers';
import ClipoardContainers from '../../../Store/Containers/ClipoardContainers';
import TestClickContainer from '../../../Store/Containers/TestClickContainer';

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
    wd: '800px',
    ht: '500px',
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

  const handleReset = (youTubeUrl: string) => {
    setUrl(youTubeUrl);
  };

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

  const handleLoop = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoop(e.currentTarget.checked);
  };

  const handleControl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setControl(e.currentTarget.checked);
    setUrl(null);
  };

  const handleNextVideo = (video: string | any[], playIndex: number) => {
    if (playIndex === video.length - 1) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  };

  const inputRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCplayed(Number(event.currentTarget.value));
    ref.current.seekTo(cplayed);
  };

  useEffect(() => {
    const [{ url }] = playlist;
    getPlayData(playlist);
    handleReset(url);
    return () => {
      getPlayData(playlist);
      handleReset(url);
    };
  }, [playlist, url]);

  console.log('cplayed', cplayed * 100);
  console.log('url', url);

  if (playlist === null) return <p>Loading...</p>;

  return (
    <div>
      <div>
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
      </div>
      <div className="">
        <div>
          <ProgressBar
            completed={Math.round(cplayed * 100)}
            maxCompleted={100}
          />
          <div className="">
            <div>
              <FaPlayCircle onClick={handlePlay} />
            </div>
            <div>
              <FaStopCircle onClick={handlePause} />
            </div>
            <button onClick={() => ref.current.seekTo(cplayed)}>
              Seek to 00:10
            </button>
          </div>
          <div className="">
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
          </div>
        </div>
        <div className="">
          <div className="">
            <input
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={cplayed}
              onChange={inputRange}
            />
          </div>
          <p>여기...{cplayed}</p>
        </div>
      </div>
      {/* <Clipboard /> */}
      <ClipoardContainers />
      <CounterContainers />
      <TestClickContainer />
    </div>
  );
}

export default VideoComp;
