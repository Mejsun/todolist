import React, {useState, useRef} from 'react'
import '../../styles/Custom.scss'

function Todo() {
const [tasks, setTasks] = useState([]);
const [state, setState] = useState('false')
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
function completeItem(i){
    setState(!state);
}

    return (
        <div className='container'>
            <form className='form'>
                <input type='text' ref={todoItem} className='input'/>
                <button type='submit' onClick={(e) => {return (addTodoItem(e))}} className='btn submit'><i class="fas fa-plus"></i></button>
            </form>
            {tasks.map((item,i)=>{return(
                <div key={Math.random()} id={Math.random()} className={`item ${!state ? 'done' : ''}`}>
                    {i+1}. {item}
                    <div className='buttons'>
                    <button type='button' onClick={()=>{deleteItem(i)}} className='btn delete'> <i className='fas fa-trash'></i></button>
                    <button type='button' onClick={()=>{completeItem(i)}} className='btn complete'><i className='fas fa-check'></i></button>
                    </div>
                </div>)})}
        </div>
    )
}

export default Todo
