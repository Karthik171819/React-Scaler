import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

const Movies = () => {

  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6849083db304fcea8fc082607b7f0d4f&language=en-US&page=2%27`)
    .then(function(res){
      console.log(res)
    })
  }, [])
  
  return (
    <div>
        <div className='text-2xl text-center font-bold m-5'>
          Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around'>
          <MovieCard/>
          
        </div>
    </div>
  )
}

export default Movies

//https://api.themoviedb.org/3/movie/popular?api_key=6849083db304fcea8fc082607b7f0d4f&language=en-US&page=2%27