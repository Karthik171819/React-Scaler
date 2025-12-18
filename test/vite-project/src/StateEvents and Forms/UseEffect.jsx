import { useState, useEffect } from "react"

export default function UseEffect(){

    const [count, setCount] = useState(0);
    const [text, setText] = useState("")

    const incrementCount = () =>{
    setCount(count+1);
    }

    const texthandle = (e)=>{
        setText(e.target.value)
    }

    //use effect
    useEffect(() => {
        console.log("Use Effect runs");
        document.title = `button clicks ${count} times`
    })


    return(
        <>
            <div>This is my count Value:{count}</div>
            <input  onChange={texthandle} type='text' value={text}/>
            <h2>{text}</h2>
            <button onClick={incrementCount}>Click Increment</button>
        </>
    );
}