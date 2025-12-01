import Hello from "./components/Hello";
import Bye from "./components/Bye";
import Props from "./components/Props";

export default function App(){
  return <>
    {/* <Hello/>
    <Bye/> */}
    <Props name="Adam" email="adam@gamail.com"/>
    <Props name="Steve" email="steve@gmail.com"/>
    <Props name="Hooper" email="hooper@gmail.com"/>
  </>
  
}