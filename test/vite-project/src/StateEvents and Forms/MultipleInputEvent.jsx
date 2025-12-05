import { useState } from "react"

export default function Forms(){
    const [name, setName] = useState({firstName:'', lastName:''});

    function handleSubmit(e){
        e.preventDefault();
        console.log({name})
    }
    return<>

    <h2>{name.firstName}-{name.lastName}</h2>

    <form>
        <label>  
            <input onChange={(e) => setName({...name, firstName: e.target.value})} type="text" value={name.firstName} placeholder="enter firstname"/>
        </label>
    
        <label>
            <input onChange={(e) => setName({...name, lastName: e.target.value})} type="text" value={name.lastName} placeholder="enter lastname"/>
        </label>

        <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
    
       
    </>
}