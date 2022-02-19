import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
// import { idOfVideo } from './VideoUtil';
import ProgressBar from '@ramonak/react-progress-bar';
import { Range, getTrackBackground } from 'react-range';

function VideoComp() {
  const size = {
    wd: '800px',
    ht: '500px',
  };
  const ref = useRef(null);
  const [playIndex, setPlayIndex] = useState(0);
  const [cplayed, setCplayed] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [auto, setAuto] = useState(false);
  const [control, setControl] = useState(false);
  const playlist = [
    { idx: 1, url: 'https://www.youtube.com/watch?v=Rq5SEhs9lws' },
    { idx: 2, url: 'https://www.youtube.com/watch?v=HuSvZLvtxms' },
  ];

  const handleNextVideo = (video: string | any[], playIndex: number) => {
    if (playIndex === video.length - 1) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  };

  // const selectVideo = (index: number) => {
  //   setPlayIndex(index);
  // };

  // console.log('titleofYouTube', idOfVideo);

  const handlePlay = () => {
    setPlaying(!playing);
  };

  const [values, setValues] = useState([50]);
  const [round, setRound] = useState(null);

  const handleRange = (values: any) => {
    setValues([...values]);
  };

  const inputRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCplayed(Number(event.currentTarget.value));
    // setCplayed(Math.ceil(Number(event.currentTarget.value)));
    ref.current.seekTo(cplayed);
    /* <button onClick={() => ref.current.seekTo(10)}></button> */

    // ref.current.seekTo([Math.floor(Number(event.currentTarget.value))]);
    // setValues([Math.floor(Number(event.currentTarget.value))]);
  };

  const howLongleft = ({ played }: any) => {
    setRound(Math.ceil(played));
  };

  console.log('cplayed', cplayed);
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
          playing={playing}
          light={false}
          muted={false}
          controls={true}
          onEnded={() => handleNextVideo(playlist, playIndex)}
          onProgress={howLongleft}
        />
      </div>
      <div className="">
        <div>
          <ProgressBar completed={cplayed * 100} maxCompleted={100} />
        </div>
        <div className="">
          <div className="">
            <button onClick={handlePlay}>{playing ? '멈춤' : '시작'}</button>
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
        </div>
        <p>여기...{cplayed}</p>
      </div>
    </div>
  );
}

export default VideoComp;
