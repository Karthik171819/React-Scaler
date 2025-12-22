import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

const Movies = () => {

  //to populate movies using state
  const [movies, setMovies] = useState([])

  //axios will handle the all https api
  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6849083db304fcea8fc082607b7f0d4f&language=en-US&page=2%27`)
    .then(function(res){
      setMovies(res.data.results)
    })
  }, [])

  return (
    <div>
        <div className='text-2xl text-center font-bold m-5'>
          Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around'>
          
          {movies.map((movieObj) =>{
            return <MovieCard/>
          })}
          
        </div>
    </div>
  )
}

export default Movies

//https://api.themoviedb.org/3/movie/popular?api_key=6849083db304fcea8fc082607b7f0d4f&language=en-US&page=2%27