import React, {useRef, useState} from 'react';

import './Intro.css';
import {BsFillPlayFill , BsPauseFill} from "react-icons/bs";
import {meal} from '../../constants'
const Intro = () => {
    const [play, setPlay] = useState(false);
    const [hover , setHover] = useState(false);
    const vidRef = useRef();

    const handleVideo = () => {
      setPlay((prevPlay)=>!prevPlay);
        if (play)
            vidRef.current.pause();
        else
            vidRef.current.play();
    }

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const style = {display:hover||!play?'flex':'none'}

    return(
  <div className={"app_video"} onClick={handleVideo} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <video src={meal} ref={vidRef} typeof={"video/mp4"} loop controls={false} muted/>
       <div className={"app_video_overlay flex_center"} style={style}>
          <div className={"app_video_overlay_circle flex_center"}>
              {play
                  ? <BsPauseFill color={'#fff'} fontSize={30}/>
                  : <BsFillPlayFill color={'#fff'} fontSize={30}/>
              }
          </div>
      </div>

  </div>
    );
}

export default Intro;
