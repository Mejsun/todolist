import React, {useState} from 'react'
import '../../styles/Custom.scss'

function Todo() {
const [value, setValue] = useState('');
const [tasks, setTasks] = useState([]);

function addTodoItem (){
    setTasks([...tasks, {text:value, isCompleted: false}])}

function submitItem (e){
    e.preventDefault(); 
    if(!value) return;
    addTodoItem(value);
    setValue('')}

function deleteItem(i){
    const items = [...tasks]
    items.splice(i,1)
    setTasks(items)}

function completeItem(i){
    const items = [...tasks]
    if(items[i].isCompleted === false){items[i].isCompleted = true; console.log('Well done!')}
    else{items[i].isCompleted = false}
        setTasks(items);}

    return (
        <div className='container'>
            <form className='form'>
                <input type='text' value={value} className='input' onChange={e => setValue(e.target.value)}/>
                <button type='submit' className='btn submit' onClick={submitItem}><i className="fas fa-plus"></i></button>
            </form>
            {tasks.map((item,i)=>{return(
                <div className={`item ${item.isCompleted  ? 'done' : ''}`} 
                id={Math.random()} 
                key={Math.random()}>
                {i+1}. {item.text}
                    <div className='buttons'>
                        <button type='button' onClick={()=>{deleteItem(i)}} className='btn delete'> <i className='fas fa-trash'></i></button>
                        <button type='button' onClick={() =>{completeItem(i)}} className='btn complete'><i className='fas fa-check'></i></button>
                    </div>
                </div>
                )})}
        </div>
)}

export default Todo