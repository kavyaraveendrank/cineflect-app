import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className=' bg-black'>
      <div className='-mt-56 pl-12 relative z-20'>
      <MovieList title={"TopRated Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      </div>
     
    </div>
    

  )
}


export default SecondaryContainer
