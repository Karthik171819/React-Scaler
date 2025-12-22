import React from 'react'

const MovieCard = ({poster_path, name}) => {
  return (
    <div  className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl px-3 hover:scale-110 duration-300 hover:cursor-pointer ' 
    style={{
      backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`
      }}>
        <div>
          {name}
        </div>
    </div>
  )
}

export default MovieCard