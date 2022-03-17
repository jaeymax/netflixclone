import React from 'react';
import './Row.css';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = 'https://image.tmdb.org/t/p/original/';


const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = React.useState([]);
    const [trailerUrl, setTrailerUrl] = React.useState('');
    React.useEffect(()=>{
        //
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    },[fetchUrl])

    const opts = {
        height:'300',
        width:'100%',
        playerVars:{
            //https://developers.google.com
            autoplay:1,
        }
    }

  const handleClick = (movie) =>{
      if(trailerUrl){
          setTrailerUrl('');
      }else{
          movieTrailer(movie?.name || '').then(url =>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
          }).catch(error => console.log(error));
      }
  } 

  return (
  <div className='row' >
      <h3>{title}</h3>
      <div className='row__posters' >
        {movies.map(movie=>{
            return (
                <img onClick = {()=>handleClick(movie)}  key={movie.id} className={`row__poster ${isLargeRow && 'row__posterLarge'}`} src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
            );
        })}
      </div>
      {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} />}
      
  </div>
  );
};

export default Row;
