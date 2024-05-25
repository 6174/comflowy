import { isWindow } from '@/utils/is-window';
import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

interface InputVideoPlayerProps {
  url: string;
}

const InputVideoPlayer: React.FC<InputVideoPlayerProps> = ({ url }) => {
  const playerRef = useRef(null);
  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    if (isWindow) {
      setVisible(true)
      if (playerRef.current) {
        // Start loading the video when the component mounts
        //playerRef.current.load();
      }
    }
  }, []);

  if (!visible) {
    return <></>
  }

  return (
    <div>
      <ReactPlayer ref={playerRef} url={url} controls />
    </div>
  );
};

export default InputVideoPlayer;