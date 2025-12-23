import "./App.css"
import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"
import Banner from "./components/Banner"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"

export default function App(){

  let [watchList, setWatchList] = useState([])

  let handleWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj]
    setWatchList(newWatchList)  
    console.log(watchList);
  }
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<> <Banner/> <Movies /></>} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

