import React from 'react'
import MovieCard from './MovieCard'

const Movies = () => {
  return (
    <div>
        <div className='text-2xl text-center font-bold m-5'>
          Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around'>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
        </div>
    </div>
  )
}

export default Movies