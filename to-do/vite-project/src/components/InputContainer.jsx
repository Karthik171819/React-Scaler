export default function InputContainer({inpVal, writeTodo}) {
    return(
        <div className="input-container">
            
          <input type="text" placeholder='Enter Task' value={inpVal} onChange={writeTodo}/>
          <button>+</button>

        </div>
    )
}