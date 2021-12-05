import React, {useState, useRef} from 'react'
import '../../styles/Custom.scss'

function Todo() {
const [tasks, setTasks] = useState([]);
const todoItem = useRef();

function addTodoItem (e){
    e.preventDefault() 
    setTasks([...tasks, todoItem.current.value])
    todoItem.current.value=''}

function deleteItem(i){
    const item = [...tasks]
    const remove = item.splice(i,1)
    setTasks(item)
}


    return (
        <div>
            <form>
                <input type='text' ref={todoItem}/>
                <button type='submit' onClick={(e) => {return (addTodoItem(e))}}>+</button>
            </form>
            {tasks.map((item,i)=>{return(
            <div key={Math.random()} id={Math.random()} 
            //className={item.completed==='true' ? 'completed' : ''}
            >
                <div>
                {i+1}. {item}
                <button type='button' onClick={()=>{deleteItem(i)}}>-</button>
                <button type='button' onClick={()=>{return(console.log('completed'))}}>!</button>
                </div>
            </div>)})}
        </div>
    )
}

export default Todo
