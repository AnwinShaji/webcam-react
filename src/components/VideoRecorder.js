import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

export const VideoRecorder = () => {
    const [imageSrc, setImageSrc]=useState();
    const[imageSrcSec,setImageSrcSec]=useState();
    const [count, setCount]=useState(0);
        const webcamRef = React.useRef(null);
        const capture = React.useCallback(
          () => {
            const image = webcamRef.current.getScreenshot();
            setImageSrc(image);
          },
          [webcamRef]
        );
        const captureSec = React.useCallback(
            () => {
              const image = webcamRef.current.getScreenshot();
              setImageSrcSec(image);
            },
            [webcamRef]
          );
        useEffect(()=>{
            setTimeout(function(){
                if(count===5){
                    captureSec();
                    setCount(1);
                  }else
                setCount(count+1);
              }, 1000);
              
        },[count])
  return (
    <>
        <Webcam 
    ref={webcamRef}
    screenshotFormat="image/jpeg"
    width={1000}
    height={500}
    />
    <button className='btn-capture' onClick={capture}>Capture photo</button>
    <div className='webcam-container'
    style={{fontWeight:"500", fontSize:"1rem"}}
    >
        <div style={{marginLeft:"5%", marginRight:"30%"}}>On clicking a button</div>
        <div>Every 5 sec</div>
    </div>
    <div className='webcam-container'>

    
    <img 
    src={imageSrc}
    width={750}
    height={400}
    />
        <img 
    src={imageSrcSec}
    width={750}
    height={400}
    />
    </div>

</>
  )
}
