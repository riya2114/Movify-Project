import React from 'react';
import styles from './SingleMovieComponent.module.css';
const SingleMovieComponent = ({
    Poster,
    Title,
    Type,
    imdbRating,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
}) => {
 return(
    <div className={styles.singleMovieCard}>
      <img src={Poster} alt='Not Found' className={styles.poster}/>
      <div className={styles.details}>
        <h1>{Title}</h1>
        <div className={styles.cardDetails}>
            <h4 className={styles.typeOfMovie}>
              <span>{Type}</span>
            </h4>
            <h4 className={styles.movieRating}>
              <span>imdbRating: {imdbRating}</span>
            </h4>
        </div>
        <p className={styles.detail}>Year:
            <span>{Year}</span>
        </p>
        <p className={styles.detail}>Rated:  
            <span>{Rated}</span>
        </p>
        <p className={styles.detail}>Released:
            <span>{Released}</span>
        </p>
        <p className={styles.detail}>Runtime:
            <span>{Runtime}</span>
        </p>
        <p className={styles.detail}>Genre:
            <span>{Genre}</span>
        </p>
        <p className={styles.detail}>Director:
            <span>{Director}</span>
        </p>
        <p className={styles.detail}>Writer:
            <span>{Writer}</span>
        </p>
        <p className={styles.detail}>Actors:
            <span>{Actors}</span>
        </p>
        <p className={styles.detail}>Plot:
            <span>{Plot}</span>
        </p>
        <p className={styles.detail}>Language: 
            <span>{Language}</span>
        </p>
        <p className={styles.detail}>Country:
            <span>{Country}</span>
        </p>
        <p className={styles.detail}>Awards:
            <span>{Awards}</span>
        </p>
      </div>
    </div>
  );
}

export default SingleMovieComponent;