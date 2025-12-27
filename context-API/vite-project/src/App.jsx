import './App.css';
import Family from './prop-drill/Family';

function App() {

  //family message
  const familyMessage ={
    familyName: "invicible"
  }
  return (
    <>
    <Family familyMessage={familyMessage}/>
    </>
  );
}

export default App;