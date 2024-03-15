import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinkBack = styled(Link)`
  display: inline-block;
  text-decoration: none;
  outline: none;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  background-color: #a6a6a6;
  color: black;
  :hover {
    background-color: #999999;
  }
`;

export const StyledMovieCard = styled.article`
  display: grid;
  grid-template-columns: 200px 1fr;
  max-width: 1600px;
  margin: 1rem auto;
`;

export const StyledPoster = styled.div`
  height: fit-content;
`;

export const StyledDetails = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  font-size: 0.75rem;
  color: black;
`;

export const StyledMovieTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const StyledMovieSubtitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const StyledText = styled.p`
  margin-bottom: 1rem;
`;

export const StyledAdditional = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-top: 1rem;
`;
