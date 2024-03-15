import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar';
import { API_ACTIONS } from 'components/constants/api.constants';
import { fetchAPIMovies } from 'components/services/common-api.service';
import { toast } from 'react-toastify';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;

    fetchAPIMovies(API_ACTIONS.SEARCH, searchQuery).then(({ results }) => {
      const newMovies =
        [...results.map(({ id, title }) => ({ id, title }))] ?? [];
      if (!newMovies.length) toast.info('There is no movies found.');
      setMovies(newMovies);
    });
  }, [searchQuery]);

  return (
    <>
      <Searchbar onSubmit={setSearchParams} />
      {!!movies.length && <MovieList movies={movies} path={''} />}
    </>
  );
};

export default Movies;
