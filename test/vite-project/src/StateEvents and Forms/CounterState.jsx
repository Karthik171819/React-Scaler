//state is just a local memory storage componstate
import { useState } from "react"

export default function Counter(){
const [state, setState] = useState(0);

//To Increment
const incrementCount = () =>{
    setState(state+1);
}

const decrementCount = () =>{
    setState(state-1);
}
    return<>
        <h1>This is my Counter:{state}</h1>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
    </>
}