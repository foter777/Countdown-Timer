import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Input from "./input";

function Countdown(){
 
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [paused, setPaused] = useState(true);
    const [started, setStarted] = useState(false);
    const [message, setMessage] = useState("");
 
    function changeTime(Time,Message){
        if (!started){
            setSecond(Time.second);
            setMinute(Time.minute);
            setHour(Time.hour);
            setStarted(true);
            setMessage(Message);
        }
        if (Time.hour !==0 || Time.minute !== 0 || Time.second !==0){
            setPaused(false);
        }
    }

    function changePause(){
        setPaused(true);
    }

    function resetTimer(){
        setPaused(true);
        setStarted(false);
        setHour(0);
        setMinute(0);
        setSecond(0);
    }

    useEffect(()=>{
        let interval;
        if (!paused){
            interval = setInterval(()=>{
                if (second >0){
                    setSecond((second)=>second-1);
                }
                else if (minute >0){
                    setMinute((minute)=>minute-1);
                    setSecond(59);
                }
                else if (hour>0){
                    setHour((hour)=>hour-1);
                    setMinute(59);
                    setSecond(59);
                }
            },1000);
            if (hour ===0 && minute === 0 && second ===0){
                resetTimer();
                const speech = new SpeechSynthesisUtterance(message);
                window.speechSynthesis.speak(speech);
            }
        }
        
        
        return() => clearInterval(interval);
    },[second,minute,hour,paused]);
 
    return(
        <div>
            <Timer 
                second = {second} 
                minute = {minute} 
                hour = {hour} 
                paused = {paused}
                />
            <Input 
                changeTime={changeTime}
                changePause={changePause}
                resetTimer={resetTimer}
                paused = {paused}
                started = {started}
                />
           
            </div>
    );
}

export default Countdown;