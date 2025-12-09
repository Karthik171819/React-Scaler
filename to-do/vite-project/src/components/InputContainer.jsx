export default function InputContainer({inpVal, writeTodo, addTodo}) {
    return(
        <div className="input-container">
            
          <input type="text" placeholder='Enter Task' value={inpVal} onChange={writeTodo}/>
          <button onClick={addTodo}>+</button>

        </div>
    )
}