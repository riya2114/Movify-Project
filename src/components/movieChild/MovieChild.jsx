import React from 'react'
import styles from './MovieChild.module.css';
import { useNavigate } from 'react-router-dom';

const MovieChild = ({Title, Year, imdbID, Type, Poster}) => {
  if(Poster === "N/A") return;
  const navigate= useNavigate();
  return (
    <div className={styles.cards} onClick={()=>navigate("/"+imdbID)}>
        <img src={Poster} alt='Not Found' className={styles.image}/>
        <div className={styles.cardContent}>
            <h3>
            Title: <span>{Title}</span>
            </h3>
            <h4>
            Year: <span>{Year}</span>
            </h4>
            <h4>
            Type: <span className={styles.movieType}>{Type.toUpperCase()}</span></h4>
        </div>
    </div>
  )
}

export default MovieChild;