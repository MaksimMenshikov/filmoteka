import { useState, useEffect, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchAPIByID } from 'components/services/common-api.service';
import { API_IMG_POSTER } from 'components/constants/api.constants.js';
import Loader from 'components/Loader/index.js';
import {
  StyledMovieCard,
  StyledPoster,
  StyledDetails,
  StyledMovieTitle,
  StyledMovieSubtitle,
  StyledText,
  StyledAdditional,
  StyledLinkBack,
} from './MovieDetails.styled.js';

import noImage from 'components/constants/no_image.jpg';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const [goBack] = useState(() => {
    return location.state?.from ?? '/movies';
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);
    fetchAPIByID(movieId)
      .then(
        ({
          title,
          release_date,
          vote_average,
          overview,
          genres,
          tagline,
          poster_path,
        }) => {
          const year = release_date.substring(0, 4);
          const userScore = Math.round(vote_average * 10) + '%';
          const genreList = genres.map(genre => genre['name']).join(' ');
          const imgURL = poster_path ? API_IMG_POSTER + poster_path : noImage;

          return setDetails({
            title,
            year,
            userScore,
            overview,
            genreList,
            tagline,
            imgURL,
          });
        }
      )
      .catch(error => console.log(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  const { title, year, userScore, overview, genreList, tagline, imgURL } =
    details;

  return (
    <>
      {isLoading && <Loader />}
      <StyledLinkBack to={goBack}>&#8592; Go back</StyledLinkBack>
      <StyledMovieCard>
        <StyledPoster>
          <img src={imgURL} alt={tagline} />
        </StyledPoster>
        <StyledDetails>
          <StyledMovieTitle>
            {title} &#40; {year} &#41;
          </StyledMovieTitle>
          <StyledText>User score: {userScore}</StyledText>
          <StyledMovieSubtitle>Overview</StyledMovieSubtitle>
          <StyledText>{overview}</StyledText>
          <StyledMovieSubtitle>Genres</StyledMovieSubtitle>
          <StyledText>{genreList}</StyledText>
        </StyledDetails>
      </StyledMovieCard>

      <StyledAdditional>
        <StyledText>Additional information</StyledText>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </StyledAdditional>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
