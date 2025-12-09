
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'
import { useState } from 'react';

export default function App() {

  const [inpVal, setInp] = useState('');
  const [todo, setTodo] = useState([]);

  function writeTodo(e) {
    setInp(e.target.value)
  }

  //To add task list
  function addTodo(){
    if(inpVal !==''){
      setTodo((prevTodos) => [...prevTodos, inpVal]);
      setInp('')
    }
    
  }

  //Delete Task
  function deleteTodo(index){
    setTodo((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

console.log(todo)

  return(
      <main>
        <h1>To Do List</h1>

        {/* passing the props for input field */}
        <InputContainer inpVal={inpVal} writeTodo={writeTodo} addTodo={addTodo}/>

        <TodoContainer todo={todo}/>
      </main>
  )
}