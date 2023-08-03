import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';
import { IMAGE_URL_W500 } from 'services/api';
import PropTypes from 'prop-types';
import imgNotFound from '../../images/not_found.jpg';

export const MovieCard = ({ poster_path, title, id }) => {
  const location = useLocation();
  // const defaultImg =
  //   'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  return (
    <Link
      className={css.movieLink}
      state={{ from: location }}
      to={`/movies/${id}`}
    >
      <li>
        <img
          className={css.movieCardImg}
          src={poster_path ? `${IMAGE_URL_W500}${poster_path}` : imgNotFound}
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
  title: PropTypes.string,
  poster_path: PropTypes.string,
};

export default MovieCard;
