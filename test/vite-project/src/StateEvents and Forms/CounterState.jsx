import { useState } from "react"

export default function Counter(){
const [set, setState] = useState(0);

//To Increment
const handleClick = () =>{
    setState(set+1);
}

const handleClickNegative = () =>{
    setState(set-1);
}
    return<>
        <h1>This is my Counter:{set}</h1>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleClickNegative}>Decrement</button>
    </>
}