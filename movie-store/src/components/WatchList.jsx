import React from 'react'

const WatchList = ({watchList}) => {
  return (
    <>

     <div className='flex justify-center flex-wrap m-4'>
        <div className=' flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center bg-blue-400 mx-5'>All Genres</div>
        <div className=' flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center bg-gray-400 mx-5'>Action</div>
        <div className=' flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center bg-gray-400 mx-5'>Crime</div>
        <div className=' flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center bg-gray-400 mx-5'>Comedy</div>
     </div>

      <div className='flex justify-center'>
        <input type="text" placeholder="Search Movie" className='border-2 border-gray-400 bg-gray-200 p-2 m-4 rounded-lg w-1/3 '/>
      </div>

      <div className=' overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='text-gray-500 text-center w-full'>

          <thead className='border-b-2'>

            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>

          </thead>

          <tbody>

            {watchList.map((movieObj) => {
              return  <tr className='border-b'>
              <td className='flex items-center px-6 py-4'>
                <img className="w-16 h-20" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
                <span className='ml-6 font-semibold'>{movieObj.title}</span>
              </td>

              <td>8.5</td>
              <td>9</td>
              <td>Action</td>
              <td className='text-red-600 hover:cursor-pointer'>Delete</td>
            </tr>

            })}



          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList