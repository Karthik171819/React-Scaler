import React from 'react'

const WatchList = () => {
  return (
    <>
      <div className='flex justify-center'>
        <input type="text" placeholder="Search Movie" className='border-2 border-gray-400 bg-gray-200 p-2 m-4 rounded-lg w-1/3 '/>
      </div>

      <div className='border border-gray-200 m-8'>
        <table className='text-gray-500 text-center w-full'>

          <thead>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>

          </thead>

          <tbody>


          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList