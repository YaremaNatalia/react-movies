import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieCast } from 'services/api';
import { IMAGE_URL_W500 } from 'services/api';
import css from './Page.module.css';
import { Loader } from 'components/Loader';

const CastPage = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);

        toast.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const defaultImg =
    '<https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg>';

  return (
    <div>
      {error && (
        <p className="errorMessage">Whoops, something went wrong: {error}</p>
      )}
      {isLoading && <Loader />}
      {cast && (
        <div className={css.castPageСontainer}>
          <h2 className={css.castTitle}>Cast</h2>
          <ul className={css.castList}>
            {cast.map(({ id, original_name, profile_path, character }) => (
              <li key={id} className={css.castItem}>
                <img
                  className={css.castImg}
                  src={
                    profile_path
                      ? `${IMAGE_URL_W500}${profile_path}`
                      : defaultImg
                  }
                  alt={original_name}
                />
                <div className={css.castInfo}>
                  <h3 className={css.castTextName}>
                    <span> Actor:</span> {original_name}
                  </h3>
                  <h3 className={css.castText}>
                    <span>Character:</span> {character}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CastPage;
