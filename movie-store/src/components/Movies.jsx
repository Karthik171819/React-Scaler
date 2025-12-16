import React from 'react'
import MovieCart from './MovieCart'

const Movies = () => {
  return (
    <div>
        <div className='text-2xl text-center font-bold m-5'>
          Trending Movies
        </div>

        <div>
          <MovieCart/>
        </div>
    </div>
  )
}

export default Movies