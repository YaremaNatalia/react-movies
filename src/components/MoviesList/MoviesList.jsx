import React from 'react';
import PropTypes from 'prop-types';

import css from './MoviesList.module.css';
import { MovieCard } from 'components/MovieCard';

export const MoviesList = ({ movies, location }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(({ id, poster_path, title }) => (
        <MovieCard
          key={id}
          poster_path={poster_path}
          title={title}
          id={id}
          location={location}
        ></MovieCard>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
