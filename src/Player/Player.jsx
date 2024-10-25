import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Shimmer from '../Components/Shimmer';

const Player = () => {

const {id} = useParams();
const navigate = useNavigate();

const [apiData , setApiData] = useState(null
)
const [error, setError] = useState(false);


  const options = {
    method: 'GET',
    headers: {

    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjM3ZTQ0N2FkNzUzNGUxN2FjZTBkNTdmOTQ2YmU3MiIsIm5iZiI6MTcyOTY3MzYwNy44Mjc1NjEsInN1YiI6IjY2ZjdiZGRkZTdkMjRlYmIyYmExZmFlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIgBzMPpXUOtCfTDkPOPZ2bWQHz_vjbe1brK73CmOOY'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(response => {
          if (response.results && response.results.length > 0) {
              setApiData(response.results[0]);
              setError(false);
          } else {
              setError(true);
          }
      })
      .catch(err => {
          console.error(err);
          setError(true);
      });
}, [id]); 

if (error) {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
    <button 
  onClick={() => navigate(-1)} 
  className="absolute top-4 left-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md shadow-md flex items-center space-x-2"
>
  <FontAwesomeIcon icon={faArrowLeft} style={{color: "white"}}/>
  <span>Back</span>
</button>
    
    <h2 className="text-center text-2xl font-semibold text-gray-700">
      Oops! Sorry the video you're looking for isn't available at the moment. Please try searching for something new!
    </h2>
</div>
  );
}

if (!apiData) {
  return <div><Shimmer/></div>; 
}


  return (
    <div className='player h-screen flex flex-col justify-center items-center'>
    <div className='z-10 absolute top-5 left-5 cursor-pointer' onClick={() => navigate(-2)}>
    <FontAwesomeIcon icon={faArrowLeft} style={{color: "white",}} className='w-8 h-8' /> 
</div>
      <div className='flex flex-col items-center'>
      <iframe  className='w-screen aspect-video'  src={`https://www.youtube.com/embed/${apiData.key}` + "?&autoplay=1&mute=1"}
      title='trailer' allowFullScreen
       frameborder="0"></iframe>

       <div className="flex items-center justify-between w-screen aspect-video pt-[38%] px-20 absolute text-white text-xl">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        </div>
       </div>
    </div>
  )
}

export default Player

