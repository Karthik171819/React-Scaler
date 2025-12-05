//state is just a local memory storage componstate
import { useState } from "react"

export default function MultipleEvent(){
const [state, setState] = useState(0);
const [factor, setFactor] = useState(1);

//To Increment
const incrementCount = () =>{
    setState(state + factor);
}

//To Decrement
const decrementCount = () =>{
    setState(state - factor);
}

//To Factor Inc/Dec

const incrementFactor = () =>{
    setFactor(factor+1);
}

const decrementFactor = () =>{
    setFactor(factor-1)
}
    return<>
        <h1>This is my Counter:{state}</h1>

        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>

         <h1>Setting my Factor:{factor}</h1>

        <button onClick={incrementFactor}>Increment</button>
        <button onClick={decrementFactor}>Decrement</button>
    </>
}