import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { SearchForm } from 'components/SearchForm';
import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchSearchQuery } from 'services/api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = inputValue => {
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);

        const { results } = await fetchSearchQuery(searchQuery);
        if (results.length === 0 || !results) {
          return toast.error('Sorry movies not found...');
        }

        setMovies(results);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesData();
  }, [searchQuery]);

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      {error && (
        <p className="errorMessage">Whoops, something went wrong: {error}</p>
      )}
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
