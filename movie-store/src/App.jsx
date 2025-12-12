import "./App.css"
import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"

export default function App(){
  return(
    <div>
      <Navbar/>

      <Movies/>

      <WatchList/>
    </div>
  )
}