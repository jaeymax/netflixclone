import React from 'react';
import './Row.css';
import axios from './axios';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = React.useState([]);
    React.useEffect(()=>{
        //
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    },[fetchUrl])
  return (
  <div className='row' >
      <h3>{title}</h3>
      <div className='row__posters' >
        {movies.map(movie=>{
            return (
                <img key={movie.id} className={`row__poster ${isLargeRow && 'row__posterLarge'}`} src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
            );
        })}
      </div>
  </div>
  );
};

export default Row;
