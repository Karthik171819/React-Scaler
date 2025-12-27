import "./App.css";
import Family from "./prop-drill/Family";
import { FamilyContext } from "./prop-drill/FamilyContext";

function App() {
  //family message
  const familyMessage = {
    familyName: "invicible",
  };
  return (
    <>
      {/* wrapping the head or  Family component with the context provider */}
      <FamilyContext.Provider value={familyMessage}>
        <Family />
      </FamilyContext.Provider>
    </>
  );
}

export default App;
