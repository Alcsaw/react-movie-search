import React from 'react';

import placeholder from '../../assets/images/placeholder-185x278.png';
import './styles.css';

export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieCardProps {
  movie: MovieData;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterURL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

  return (
    <div className="card">

      <img
        src={
          movie.poster_path ?
            `${posterURL}${movie.poster_path}`
            : placeholder
        }
        alt={movie.title + ' poster'}
        className="card--image"
      />

      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className="card--description">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;