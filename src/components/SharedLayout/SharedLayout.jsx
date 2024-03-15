import {
  Section,
  StyledHeader,
  StyledLink,
  StyledMain,
} from './SharedLayout.styled.js';

import Loader from 'components/Loader/index.js';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Section>
        <StyledHeader>
          <nav>
            <StyledLink to="/">Movie List</StyledLink>
            <StyledLink to="/movies">Search Movies</StyledLink>
          </nav>
        </StyledHeader>
      </Section>
      <Section>
        <StyledMain>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </StyledMain>
      </Section>
    </>
  );
};

export default SharedLayout;
