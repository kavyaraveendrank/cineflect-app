import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10'>
  <img   src={BG_URL} alt="logo" className='w-full h-full object-cover' />
  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)' }}></div>
</div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>


  )
};

export default GptSearch
