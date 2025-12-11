import React from 'react'

//import movie logo
import Logo from "../MovieLogo.png"

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pi-3 py-4">
        <img className='w-[50px]' src={Logo} alt=""/>

        <a  className="text-blue-500 text-3xl font-bold" href="">Home</a>

        <a className="text-blue-500 text-3xl font-bold " href="/watchlist">WatchList</a>
    </div>
  )
}

export default Navbar