import React, {useState} from 'react'
import '../../styles/Custom.scss'

function Clock(){
const [time, setTime] = useState();

function setNewTime(){
    let newTime = new Date().toUTCString();
    setTime(newTime)}

setInterval(setNewTime);

return(
    <div className='timeContainer'>
    <p>{time}</p>
    </div>
)}

export default Clock;