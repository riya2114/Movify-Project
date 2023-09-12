import React, { useState, useEffect } from 'react';
import styles from './SingleMoviesPage.module.css';
import { useParams } from 'react-router-dom';
import SingleMovieComponent from '../../components/singleMovie/SingleMovieComponent';

const SingleMoviePage = () => {
  const {id} = useParams();
  const [singleMovieData, setSingleMovieData] = useState([]);

  const fetchMovieData = async(id) =>{
    try{
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_MOVIE_API_KEY}`);
      const data = await response.json();
      setSingleMovieData(data);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMovieData(id)
  }, []);
  return(
    <div className={styles.singleWrapper}>
      <SingleMovieComponent {...singleMovieData}/>
    </div>
  )
}

export default SingleMoviePage;