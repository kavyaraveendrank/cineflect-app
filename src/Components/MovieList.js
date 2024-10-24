import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-6'>
      <h1 className='text-3xl  text-white'>{title}</h1>
      <div className="no-scrollbar overflow-y-auto p-6 flex">
        <div className='flex'>
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                posterPath={movie.poster_path} 
                movieTitle={movie.title}
                movieRating={movie.vote_average}
                movieDate={movie.release_date}
                id={movie.id} 
              />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;


