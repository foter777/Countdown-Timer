import React from "react";
import './style.css';

function Timer({second, minute, hour}){

 
    return (
        <div className="container">
        <header><h1 className="Title">Online Timer</h1></header>
        <h2 className="Timer">{hour<10?"0"+hour:hour}:{minute<10?"0"+minute:minute}:{second<10?"0"+second:second}</h2>
        </div>
    )
}

export default Timer;