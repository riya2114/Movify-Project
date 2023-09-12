import React, { useEffect, useState } from 'react';
import styles from './MoviesPage.module.css';
import MovieChild from '../../components/movieChild/MovieChild';

const MoviesPage = ({movie,setMovie}) => {
  const [movies, setMovies] = useState([])
const fetchMovieData = async(search) =>{
  try{
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${import.meta.env.VITE_MOVIE_API_KEY}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  catch(error){
    console.log(error);
  }
}
useEffect(() => {
  fetchMovieData(movie)
}, [movie]);

  
  return (
    <div className={styles.movieParent}>
    {!movies ? (
      <h1>Oops...not Found !</h1>
      ) : (
        movies.map((data) =>{
          return <MovieChild key={data.imdbID}{...data}/>
        })
      )}
      </div>
  )
};
export default MoviesPage;