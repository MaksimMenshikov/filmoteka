import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';

import { fetchReviewsByID } from 'components/services/common-api.service';
import { Section } from 'components/SharedLayout/SharedLayout.styled.js';
import { StyledText } from '../MovieDetails.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);
    fetchReviewsByID(movieId)
      .then(({ results }) =>
        setReviews(
          results.map(({ author, content }) => ({
            author,
            content,
          }))
        )
      )
      .catch(error => console.error(error))
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <ul>
          {reviews.length
            ? reviews.map(({ author, content }) => (
                <li key={content}>
                  <StyledText>Author: {author}</StyledText>
                  <StyledText>{content}</StyledText>
                </li>
              ))
            : "We don't have any reviews for this movie."}
        </ul>
      </Section>
    </>
  );
};

export default Reviews;
