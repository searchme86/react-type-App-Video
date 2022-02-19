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

  //게이지바
  // const STEP = 0.1;
  const STEP = 1;
  const MIN = 0;
  const MAX = 100;

  const [values, setValues] = useState([50]);
  const [round, setRound] = useState(null);

  const handleRange = (values: any) => {
    setValues([...values]);
  };

  const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues([Math.floor(Number(event.currentTarget.value))]);
  };

  const howLongleft = ({ played }: any) => {
    setRound(Math.ceil(played * 100));
  };

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
          <ProgressBar completed={round} maxCompleted={100} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            margin: '2em',
          }}
        >
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={handleRange}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: '36px',
                  display: 'flex',
                  width: '100%',
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: '5px',
                    width: '100%',
                    borderRadius: '4px',
                    background: getTrackBackground({
                      values: values,
                      colors: ['#548BF4', '#ccc'],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: 'center',
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '42px',
                  width: '42px',
                  borderRadius: '4px',
                  backgroundColor: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0px 2px 6px #AAA',
                }}
              >
                <div
                  style={{
                    height: '16px',
                    width: '5px',
                    backgroundColor: isDragged ? '#548BF4' : '#CCC',
                  }}
                />
              </div>
            )}
          />
          <output style={{ marginTop: '30px' }} id="output">
            {values[0].toFixed(1)}
          </output>
        </div>
        <div className="">
          <div className="">
            <button onClick={handlePlay}>{playing ? '멈춤' : '시작'}</button>
            <button onClick={() => ref.current.seekTo(10)}>
              Seek to 00:10
            </button>
          </div>
          <p>여기</p>
        </div>
      </div>
    </div>
  );
}

export default VideoComp;
