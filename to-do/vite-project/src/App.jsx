
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'
import { useState } from 'react';

export default function App() {

  const [inpVal, setInp] = useState('Enter a Task');
  const [todo, setTodo] = useState([]);

  function writeTodo(e) {
    setInp(e.target.value)
  }

  //To add task list
  function addTodo(){
    setTodo()
  }

  return(
      <main>
        <h1>To Do List</h1>

        {/* passing the props for input field */}
        <InputContainer inpVal={inpuVal} writeTodo={writeTodo}/>

        <TodoContainer/>
      </main>
  )
}