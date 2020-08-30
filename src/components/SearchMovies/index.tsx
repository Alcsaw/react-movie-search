import React, { FormEvent, useState } from 'react';

import MovieCard, { MovieData } from '../MovieCard';
import keys from '../../config/keys';

import './styles.css';

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<MovieData[]>([]);

  const searchMovies = async (event: FormEvent) => {
    event.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${keys.apiKey}&query=${query}&page=1`

    try {
      const response = await fetch(url);
      const data = await response.json();

      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  return <div>
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">Movie name</label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="i.e. Jurassic Park"
        value={query}
        onChange={(e) => { setQuery(e.target.value) }}
      />
      <button className="button" type="submit">Search</button>
    </form>

    <div className="card-list">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  </div>;
}

export default SearchMovies;
