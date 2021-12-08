import React from 'react';
import './assets/styles/Custom.scss';
import Todo from './assets/components/Todo/Todo.js'
import Clock from './assets/components/Todo/Clock';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todo/>
      <Clock/>
    </div>
    
  );
}

export default App;
