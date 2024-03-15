import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies, path }) => {
  const location = useLocation();
  const additionalPath = path ? `${path}/` : '';

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${additionalPath}${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string,
};
export default MovieList;
