import React from 'react'

//import movie logo
import Logo from "../MovieLogo.png"

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
        <img className='w-[50px]' src={Logo} alt=""/>

        <Link to="/"  className="text-blue-500 text-3xl font-bold" >Movies</Link>

        <Link to="/watchlist" className="text-blue-500 text-3xl font-bold " >WatchList</Link>
        <h3 className='text-black bg-purple-400 p-1 rounded-xl'>Click on emoji to add movies in watch list</h3>
    </div>
  )
}


export default Navbar