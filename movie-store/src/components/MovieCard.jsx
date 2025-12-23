import React from 'react'

 function MovieCard({movieObj, poster_path, name, handleWatchList, removeFromWatchList, watchList})  {

  function doesContain(movieObj) {
    for( let i=0; i<watchList.length; i++) {
      if(watchList[i].id === movieObj.id) {
        return true;  
      }
    }
    return false;

  }
  return (
    // Movie card component to display movie poster and name
    <div  className='relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl px-1 hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end shadow-lg overflow-hidden ' 
    style={{
      backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`
      }}>

        {doesContain(movieObj) ?
          <button onClick={() => removeFromWatchList (movieObj)} className=' m-2 bg-gray-900/60 text-white px-2 py-1 rounded-lg'>&#10060;</button>
        :
          <button onClick={() => handleWatchList (movieObj)} className=' m-2 bg-gray-900/60 text-white px-2 py-1 rounded-lg'>&#128525;</button>
        }
         {/* Movie name overlay */}
        <div className=' absolute bottom-0 text-white text-sm bg-black/70 px-2 py-2 w-full  text-center bg-gray-900/60 '>
          {name}
        </div>
    </div>
  )
}

export default MovieCard
