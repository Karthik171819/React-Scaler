import "./App.css"
import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"

import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App(){
  return(
    <div>
      <BrowserRouter>


        <Navbar/>

          <Routes>


            <Movies/>

            <WatchList/>
          </Routes>
        
      </BrowserRouter>

      
    </div>
  )
}