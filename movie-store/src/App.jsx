import "./App.css"
import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"
import Banner from "./components/Banner"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"

export default function App(){
  //its a global state for adding watchlist to access every component
  let [watchList, setWatchList] = useState([])

  let handleWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj]
    //to store watchlist in local storage persists even after refreshing
    localStorage.setItem("watchList", JSON.stringify(newWatchList))
    setWatchList(newWatchList)  
    console.log(watchList);
  }

    //Remove the watchlist 
    let removeFromWatchList = (movieObj) => {
      let filterWatchList = watchList.filter(movie => movie.id !== movieObj.id)
      setWatchList(filterWatchList)
    }

  

  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<> <Banner/> <Movies watchList={watchList} handleWatchList={handleWatchList}  removeFromWatchList={removeFromWatchList}/></>} />
          <Route path="/watchlist" element={<WatchList  watchList={watchList}/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

