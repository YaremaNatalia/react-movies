import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';

import { toast } from 'react-toastify';
import { Loader } from 'components/Loader';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import { fetchMovieDetails } from 'services/api';
import { IMAGE_URL_W500 } from 'services/api';

import css from './Page.module.css';

const CastPage = lazy(() => import('pages/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));

const MovieDetails = () => {
  const [movieDet, setMovieDet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetailsData = async () => {
      try {
        setIsLoading(true);

        const movieDetales = await fetchMovieDetails(movieId);

        setMovieDet(movieDetales);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  const { title, release_date, poster_path, vote_average, overview, genres } =
    movieDet ?? {};
    const defaultImg =
      '<https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg>';
  const poster = poster_path || defaultImg;
  const releaseYear = release_date ? release_date.split('-')[0] : '';

  return (
    <div>
      {error && (
        <p className="errorMessage">Whoops, something went wrong: {error}</p>
      )}
      {isLoading && <Loader />}
      {movieDet && (
        <div className={css.container}>
          <Link to={backLink.current}>
            <ButtonBack />
          </Link>
          <div className={css.containerMovieCard}>
            <div className={css.movieWrap}>
              <img
                className={css.movieImg}
                src={`${IMAGE_URL_W500}${poster}`}
                alt={title}
              />
              <div className={css.movieInfoWrap}>
                <h1 className={css.movieTitle}>
                  {title} ({releaseYear})
                </h1>

                <h2 className={css.moviePretitle}>
                  User score: {Math.round(vote_average * 10)}%
                </h2>
                <p className={css.movieText}>
                  Overview <br /> {overview}
                </p>
                <h2 className={css.moviePretitle}>Genres:</h2>
                <p className={css.movieText}>
                  {genres.map(genre => genre.name).join(' ')}
                </p>
              </div>
            </div>
            <h2 className={css.moviePretitle}>Additional information</h2>
            <div className={css.containerLink}>
              <NavLink to="cast" className={css.linkItem}>
                Cast
              </NavLink>
              <NavLink to="reviews" className={css.linkItem}>
                Reviews
              </NavLink>
            </div>
            <div>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="cast" element={<CastPage />} />
                  <Route path="reviews" element={<ReviewsPage />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
