import React, { useState, useEffect } from 'react';
import aud from "./sound.mp3"
import Timer from './Timer';
import { Link, useLocation } from 'react-router-dom';
import { computeHeadingLevel } from '@testing-library/react';

 
const Pomodoro = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const {state}=useLocation();
// console.log(state)
if(state){
  setMinutes(state.min);
  setSeconds(state.sec)
}

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            setMinutes(1); 
            setSeconds(0);
            playAlarm();
          } else {
          
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(20);
          }
        } else {
         
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

   

    return () => clearInterval(interval); 

  }, [isActive, minutes, seconds]);

  const playAlarm = () => {
    const audio = new Audio(aud);
    audio.play();
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(1);
    setSeconds(0);
  };

  return (
    <div>
      <div className='clock'>
        <p>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</p>
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>

        <button><Link to= "/timer"> Customise</Link></button>
      </div>
    </div>
  );
};

export default Pomodoro;