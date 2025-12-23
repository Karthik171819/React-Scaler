import React from 'react'

const MovieCard = ({poster_path, name}) => {
  return (
    // Movie card component to display movie poster and name
    <div  className='relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl px-1 hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end shadow-lg overflow-hidden ' 
    style={{
      backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`
      }}>

        {/* emoji */}
        <div className=' m-4  justify-center items-center rounded-lg bg-gray-900/60'>
          &#128525;
        </div>

         {/* Movie name overlay */}
        <div className=' absolute bottom-0 text-white text-sm bg-black/70 px-2 py-2 w-full  text-center bg-gray-900/60 '>
          {name}
        </div>
    </div>
  )
}

export default MovieCard