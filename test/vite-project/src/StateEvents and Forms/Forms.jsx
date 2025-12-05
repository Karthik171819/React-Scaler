import { useState } from "react";

export default function Form() {

    const [text, setText] = useState("");
    function Input(e){
        setText(e.target.value);
    }

    return<>
        <form>
            <input onChange={Input} type="text" value={text}/>
        </form>
       <h2>{text}</h2> 
    </>
}