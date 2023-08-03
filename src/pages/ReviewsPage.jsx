import React, { useEffect, useState } from 'react';
import css from './Page.module.css';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        toast.error(`Error fetching movie details: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3 className={css.textError}>We don't have any reviews for this movie.</h3>
  ) : (
    <div className={css.reviewsPageContainer}>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      <ul className={css.reviewsList}>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={css.reviewsItem}>
            <span className={css.reviewsAutor}>Author:</span> {author}
            <p className={css.reviewsText}>{content}</p>
          </li>
        ))}
      </ul>
      {error && (
        <p className="errorMessage">Whoops, something went wrong: {error}</p>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default ReviewsPage;