import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0.25rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.4);
`;

export const StyledMain = styled.main`
  padding: 2rem;
`;

export const StyledLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;
