import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = ({handleWatchList}) => {

  //to populate movies using state
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  //pagination logic
  const handlePrev =() =>{
    if(pageNo==1){
      setPageNo(1)
    }
    else{
      setPageNo(pageNo-1)
    }
  }

  const handleNext =() =>{
    setPageNo(pageNo+1)
  }

  //axios will handle the all https api
  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6849083db304fcea8fc082607b7f0d4f&language=en-US&page=${pageNo}%27`)
    .then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  }, [pageNo])

  return (
    <div>
        <div className='text-2xl text-center font-bold m-5'>
          Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around gap-5'>
          
          {movies.map((movieObj) =>{
            return <MovieCard  key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleWatchList={handleWatchList}/>
          })}
          
        </div>
        <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  )
}

export default Movies

//https://api.themoviedb.org/3/movie/popular?api_key=6849083db304fcea8fc082607b7f0d4f&language=en-US&page=2%27