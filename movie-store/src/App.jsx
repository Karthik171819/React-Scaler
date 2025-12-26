import "./App.css"
import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"
import Banner from "./components/Banner"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react"

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

    //useEffect to get the watchlist from local storage when the app loads
    useEffect(() =>{
      let moviesFromWatchList = localStorage.getItem("watchList")
      if(!moviesFromWatchList){
        return
      }
        setWatchList(JSON.parse(moviesFromWatchList))
    }, [])

  

  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<> <Banner/> <Movies watchList={watchList} handleWatchList={handleWatchList}  removeFromWatchList={removeFromWatchList}/></>} />
          <Route path="/watchlist" element={<WatchList  watchList={watchList} setWatchList={setWatchList}  removeFromWatchList={removeFromWatchList}/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

