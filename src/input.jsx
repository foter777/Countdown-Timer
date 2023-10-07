import React, { useState } from "react";
import './style.css';

function Input({changeTime,paused,changePause,resetTimer}){

    const [message,setMessage] = useState("");
    const[time, setTime] = useState({
        second:0,
        minute:0,
        hour:0
    });
    

    function updateTime (e){
        const value = e.target.value;
        const name = e.target.name;
        
        setTime(prevTime =>{
            if (name === "hour"){
                if (value > 99){
                    return{
                        hour:99,
                        minute:prevTime.minute,
                        second:prevTime.second
                    }
                }
                else if(value < 0){
                    return{
                        hour:0,
                        minute:prevTime.minute,
                        second:prevTime.second
                    }
                }
                else{
                    return{
                        hour:value,
                        minute:prevTime.minute,
                        second:prevTime.second
                    }
                }
            }
            else if (name === "minute"){
                if (value > 59){
                    return{
                        hour:prevTime.hour,
                        minute:59,
                        second:prevTime.second
                    }
                }
                else if(value <0){
                    return{
                        hour:prevTime.hour,
                        minute:0,
                        second:prevTime.second
                    }
                }
                else{
                    return{
                        hour:prevTime.hour,
                        minute:value,
                        second:prevTime.second
                    }
                }
            }
            else if (name === "second"){
                if (value > 59){
                    return{
                    hour:prevTime.hour,
                    minute:prevTime.minute,
                    second:59
                    }
                }
                else if (value < 0){
                    return{
                        hour:prevTime.hour,
                        minute:prevTime.minute,
                        second:0
                    }
                }
                else{
                    return{
                        hour:prevTime.hour,
                        minute:prevTime.minute,
                        second:value
                    }   
                }
            }
        });
    }
    return(
        <div className="input-container">
                <div className="message-container">
                    <label className="message">Message:</label>
                    <input 
                        name="message"
                        value = {message}
                        type="text"
                        onChange = {(e)=>{setMessage(e.target.value)}}
                    />
                </div>

                <br></br>
                <div className="label-container">
                    <label>H:</label>
                    <input 
                        name = "hour"
                        value = {time.hour} 
                        onChange={updateTime}
                        type="number"
                        min="0"
                        pattern="[0-9]*"

                    />
                    <label>M:</label>
                    <input 
                        name="minute"
                        value = {time.minute}
                        onChange={updateTime}
                        type="number"
                        min="0"
                        pattern="[0-9]*"

                    />
                    <label>S:</label>
                    <input 
                        name="second"
                        value = {time.second}
                        onChange={updateTime}
                        type="number"
                        min="0"
                        pattern="[0-9]*"
                        

                    />
                </div>
                <br></br>
                <div className="input-buttons">
                {paused ? <button onClick={()=>{changeTime(time,message)}}>Start</button> :<button onClick={()=>{changePause()}}>Pause</button>}
                <button className="restart" onClick={()=>{
                    resetTimer()
                    setTime({
                        second:0,
                        minute:0,
                        hour:0
                    })
                    setMessage("");
                    }}>Reset</button>
                    </div>
        </div>
    );
}

export default Input;