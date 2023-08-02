import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieCard.module.css';
import { IMAGE_URL_W500 } from 'services/api';
import PropTypes from 'prop-types';

export const MovieCard = ({ poster_path, title, id, location }) => {
  const defaultImg =
    '<https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg>';
  const poster = poster_path  || defaultImg;
  return (
    <Link
      className={css.movieLink}
      state={{ from: location }}
      to={`/movies/${id}`}
    >
      <li>
        <img
          className={css.movieCardImg}
          src={`${IMAGE_URL_W500}${poster}`}
          alt={title}
        />
        <div className={css.movieCardInfo}>
          <p className={css.movieCardTitle}>{title}</p>
        </div>
      </li>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  location: PropTypes.object.isRequired,
};

export default MovieCard;
