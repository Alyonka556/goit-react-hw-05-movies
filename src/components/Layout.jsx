import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<h1>Loading...</h1>}>
        <StyledMainContent>
          <Outlet />
        </StyledMainContent>
      </Suspense>

      <StyledFooter>
        <h2>&copy; All right reserved 2023</h2>
      </StyledFooter>
    </StyledWrapper>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #714d93;
  font-size: 32px;

  nav {
    display: flex;
    gap: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 32px;
  color: black;

  &.active {
    color: #303f9f;
    text-decoration: underline;
  }

  &:focus {
    color: #303f9f;
    text-decoration: underline;
  }
  &:hover {
    color: #303f9f;
    text-decoration: underline;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMainContent = styled.div`
  flex-grow: 1;
  display: flex;
  background-color: teal;
`;

const StyledFooter = styled.footer`
  /* padding: 0 20px; */
  background-color: #476363;
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
`;

export default Layout;
