import "./App.css"
import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"
import Banner from "./components/Banner"

import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App(){
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