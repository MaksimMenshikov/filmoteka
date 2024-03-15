import { useState, useEffect } from 'react';
import { API_ACTIONS } from 'components/constants/api.constants.js';
import { fetchAPIMovies } from 'components/services/common-api.service';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAPIMovies(API_ACTIONS.TRENDING)
      .then(({ results }) => {
        setMovies([...results.map(({ id, title }) => ({ id, title }))]);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MovieList movies={movies} path={'movies/'} />
    </>
  );
};

export default Home;
