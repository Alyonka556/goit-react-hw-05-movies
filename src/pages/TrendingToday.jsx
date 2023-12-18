import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchMoviesTrend } from 'services/movies-api';
import styled from 'styled-components';

export const TrendingToday = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesTrend().then(res => setMovies(res));
  }, []);

  return (
    <StyledWrapper>
      <StyledTitle>Trending Today</StyledTitle>
      <hr />
      <div>
        <StyledList>
          {movies.map(movie => (
            <li key={movie.id}>
              <StyledLink to={`/movies/${movie.id.toString()}`}>
                {movie.title}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width="120"
                  alt={movie.media_type}
                />
              </StyledLink>
            </li>
          ))}
        </StyledList>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledTitle = styled.h2`
  padding: 20px 40px;
  margin: 0 auto;
  font-size: 36px;
  font-weight: 500;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  li {
    overflow: hidden;
    display: flex;
    img {
      width: 100%;
      height: 100%;

      transition: all 0.5s ease-in-out;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
`;

const StyledLink = styled(NavLink)`
  width: 100%;
  padding: 30px 40px;
  display: flex;
  flex-direction: column-reverse;
  gap: 30px;
  color: white;
  margin: 0 auto;
  &:active {
    color: #303f9f;
    text-decoration: underline;
  }
  &:hover {
    color: #303f9f;
    text-decoration: underline;
  }
`;
