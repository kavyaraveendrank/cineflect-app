import React from 'react';
import { IMG_CDN_URL } from '../utils/constants'; 
import { Link } from 'react-router-dom'; 

const MovieCard = ({ posterPath, id , movieTitle , movieRating , movieDate}) => {
  if (!posterPath || !id) return null; 

  return (
    <div>
      <Link to={`/browse/player/${id}`}> 
      <div className='w-48 pr-4'>
  <img 
    className='transform transition-transform duration-700 ease-in-out hover:scale-125' 
    alt='Movie Poster' 
    src={IMG_CDN_URL + posterPath} 
  />
  <div className="flex flex-col space-y-3 mt-4">
    <p className='text-white text-sm'>Title: {movieTitle}</p>
    <p className='text-white text-sm'>IMDB: {movieRating}</p>
    <p className='text-white text-sm'>Date: {movieDate}</p>
  </div>
</div>
      </Link>
    </div>


  );
};

export default MovieCard;

