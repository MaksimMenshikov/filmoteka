import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';

import { fetchCastByID } from 'components/services/common-api.service';
import { Section } from 'components/SharedLayout/SharedLayout.styled.js';
import { StyledText } from '../MovieDetails.styled';
import { CastList, CastItem } from './Cast.styled';
import { API_IMG_POSTER } from 'components/constants/api.constants';

import noImage from 'components/constants/no_image.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);
    fetchCastByID(movieId)
      .then(({ cast }) =>
        setCast(
          cast.map(({ name, character, profile_path }) => {
            const castName = name;
            const imgURL = profile_path
              ? API_IMG_POSTER + profile_path
              : noImage;

            return {
              castName,
              character,
              imgURL,
            };
          })
        )
      )
      .catch(error => console.error(error))
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <CastList>
          {cast.map(({ imgURL, castName, character }) => (
            <CastItem key={castName}>
              <img src={imgURL} alt={castName} width="100%" />
              <StyledText>{castName}</StyledText>
              <StyledText>{character}</StyledText>
            </CastItem>
          ))}
        </CastList>
      </Section>
    </>
  );
};

export default Cast;
