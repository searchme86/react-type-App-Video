import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import ProgressBar from '@ramonak/react-progress-bar';
import Toggle from './ToggleComp/Toggle';
import Clipboard from './ClipboardComp/Clipboard';

function VideoComp() {
  const size = {
    wd: '800px',
    ht: '500px',
  };
  const playlist = [
    { idx: 1, url: 'https://www.youtube.com/watch?v=Rq5SEhs9lws' },
    { idx: 2, url: 'https://www.youtube.com/watch?v=HuSvZLvtxms' },
  ];
  const ref = useRef(null);
  const [playIndex, setPlayIndex] = useState(0);
  const [cplayed, setCplayed] = useState(0);
  //실행에 대한 state
  const [play, setPlay] = useState(false);
  // 무엇
  const [values, setValues] = useState([50]);
  const [round, setRound] = useState(null);
  const [auto, setAuto] = useState(false);
  const [control, setControl] = useState(false);

  const handleNextVideo = (video: string | any[], playIndex: number) => {
    if (playIndex === video.length - 1) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  };

  //플레이하는 함수
  const handlePlay = () => {
    setPlay(true);
  };

  //멈추는 함수
  const handlePause = () => {
    setPlay(false);
  };

  const handleRange = (values: any) => {
    setValues([...values]);
  };

  // const selectVideo = (index: number) => {
  //   setPlayIndex(index);
  // };

  // console.log('titleofYouTube', idOfVideo);

  const inputRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCplayed(Number(event.currentTarget.value));
    ref.current.seekTo(cplayed);
  };

  const howLongleft = ({ played }: any) => {
    setRound(Math.ceil(played));
  };

  console.log('cplayed', cplayed * 100);

  if (playlist === null) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <ReactPlayer
          className="react-player"
          ref={ref}
          width={size.wd}
          height={size.ht}
          url={playlist[playIndex].url}
          playing={play}
          light={false}
          muted={false}
          controls={true}
          onEnded={() => handleNextVideo(playlist, playIndex)}
          onProgress={howLongleft}
        />
      </div>
      <div className="">
        <div>
          <ProgressBar
            completed={Math.round(cplayed * 100)}
            maxCompleted={100}
          />
        </div>
        <div className="">
          <div className="">
            {/* <button onClick={handlePlay}>{playing ? '멈춤' : '시작'}</button> */}
            <button onClick={handlePlay}>시작</button>
            <button onClick={handlePause}>멈춤</button>
            <button onClick={() => ref.current.seekTo(cplayed)}>
              Seek to 00:10
            </button>
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
          <Toggle />
        </div>
      </div>
      <Clipboard />
    </div>
  );
}

export default VideoComp;
