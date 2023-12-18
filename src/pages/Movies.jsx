import MovieSearch from '../components/MovieSearch/MovieSearch';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'services/movies-api';
import styled from 'styled-components';
const imgLink = 'https://image.tmdb.org/t/p/w500';

const Movie = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesData, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') || '';

  const updateQueryString = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (query) {
      setInputValue(query);
      async function getSearchMovies() {
        try {
          const moviesDataNew = await fetchMoviesBySearch(query);
          setMovies(moviesDataNew);
        } catch (error) {
          console.log(error);
        }
      }
      getSearchMovies();
    } else {
      setInputValue('');
      setMovies([]);
    }
  }, [query]);

  // const onSubmit = event => {
  //   event.preventDefault();
  //   setSearchParams({ query: inputValue });
  // };
  const onSubmit = event => {
    event.preventDefault();
    if (!inputValue) {
      setSearchParams({});
    } else {
      setSearchParams({ query: inputValue });
    }
  };

  return (
    <>
      <StyledContainer>
        <MovieSearch onSubmit={onSubmit} onChange={updateQueryString} />
        <StyledBox>
          <StyledList>
            {moviesData.map(movie => (
              <li key={movie.id}>
                <StyledNavLink
                  state={{ from: location }}
                  to={movie.id.toString()}
                >
                  {movie.poster_path === null ? (
                    <img
                      src={`https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`}
                      alt={movie.title}
                    />
                  ) : (
                    <img
                      src={`${imgLink + movie.poster_path}`}
                      alt={movie.title}
                    />
                  )}
                  <p>{movie.title}</p>
                  <p>{movie.media_type}</p>
                </StyledNavLink>
              </li>
            ))}
          </StyledList>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledBox = styled.div`
  list-style: none;
  padding: 40px 40px;
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
      object-fit: cover;

      transition: all 0.5s ease-in-out;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
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

export default Movie;
