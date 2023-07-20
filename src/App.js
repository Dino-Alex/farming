import './App.css'
import React from "react";
import { useWindowSize } from "./useWindowSize";
import frame from "./image/frame.png";
import backgroundImage from "./image/background.gif";
import searchframe from "./image/searchframe.png";
import searchbt from "./image/searchbt.png";
import havertframe from "./image/havert/havertframe.png";

function App() {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 1080 });
  const { rotate, width, height, marginLeft, ratio } = size;
  console.log('height::: ', height);

  return (
    <div
      id="root"
      className="container-screen mobile-rotater background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height,
        width,
        transform: `rotate(${rotate})`,
        marginLeft: marginLeft,
      }}
    >
      <div
        className="container-screen  "
        style={{
          backgroundImage: `url(${frame})`,
          height,
          width,
        }}
      >
        <label style={{
          top:140*ratio,
          left:110*ratio, 
        }} class="toggle-switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      <img className='absolute' src={searchframe} style={{height:95*ratio,width:410*ratio,top:140*ratio,left:1430*ratio}} />
      <a><img className='absolute' src={searchbt} style={{height:52*ratio,width:43*ratio,top:170*ratio,left:1760*ratio}} /></a>
      <img className='absolute' src={havertframe} style={{height:710*ratio,width:421*ratio,top:250*ratio,left:75*ratio}} />
      <img className='absolute' src={havertframe} style={{height:710*ratio,width:421*ratio,top:250*ratio,left:1430*ratio}} />
      </div>
    </div>
  );
}

export default App;
