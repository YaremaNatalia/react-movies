import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { fetchTrendingMovies } from 'services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);

         const { results } = await fetchTrendingMovies();

        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <div>
      <h1 className="homePageTitle">Trending today</h1>
      {error && (
        <p className="errorMessage">Whoops, something went wrong: {error}</p>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default HomePage;
