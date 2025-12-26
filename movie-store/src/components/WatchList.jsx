import React, { useState, useEffect } from "react";
import genreids from "../utility/genre";

const WatchList = ({ watchList, setWatchList }) => {
  const [search, setSearch] = useState("");
  //genre filter state
  const[genreFilter, setGenreFilter] = useState(["All Genres"]);
  const[currentGenre, setCurrentGenre] = useState("All Genres");  

  //function to handle search input
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //function to handle genre filter
  let handleFilter = (genre) =>{
    setCurrentGenre(genre); 
  }

  //sorting the watchlist based on rating
  let sortIncreasing = () =>{
   let sortedIcrement=  watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIcrement])  
  }

  let sortDecreasing = () =>{
   let sortedDecreasing= watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
      
    });
    temp = new Set(temp);
    setGenreFilter(["all genres", ...temp])
  }, [watchList]);
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreFilter.map((genre) =>{
         return <div  onClick={() =>handleFilter(genre)} className={ currentGenre==genre?" flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center bg-blue-400 mx-5" : " flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center bg-gray-400 mx-5"}>
          {genre }
          </div>
        })}
      </div>

      <div className="flex justify-center">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movie"
          className="border-2 border-gray-400 bg-gray-200 p-2 m-4 rounded-lg w-1/3 "
        />
      </div>

      <div className=" overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="text-gray-500 text-center w-full">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th className='flex justify-center items-center'>
                <div className="p-2" onClick={sortIncreasing}><i class="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Rating</div>
                <div className='p-2' onClick={sortDecreasing}><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchList.filter((movieObj) =>{
                if(currentGenre=="All Genres"){
                  return true;
                }else{
                  return genreids[movieObj.genre_ids[0]]==currentGenre;
                }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="w-20 h-20"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <span className="ml-6 font-semibold">
                        {movieObj.title}
                      </span>
                    </td>

                    {/* fetching movie properties from api */}
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td className="text-red-600 hover:cursor-pointer">
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
