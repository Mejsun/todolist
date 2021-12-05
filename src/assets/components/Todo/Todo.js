import React, {useState} from 'react'

function Todo() {
const [tasks, setTasks] = useState([]);

    return (
        <div>
            <input type='text' onBlur={(e)=>{return (setTasks([...tasks, e.target.value]))}}/>
            {tasks.map((item,i)=>{return(<div key={Math.random()}>{i+1}. {item}</div>)})}
        </div>
    )
}

export default Todo
