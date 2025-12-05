export default function Message(){
    function Hello(){
        console.log("Hello!");
    }
    return <>
        <button onClick={Hello}>Click me to say Hello!</button>
    </>
}