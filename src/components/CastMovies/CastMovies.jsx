import { useHttp } from 'hooks/useHttp';
// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'services/movies-api';

const CastMovies = () => {
  const { movieId } = useParams();

  const [cast] = useHttp(fetchMoviesCast, movieId);
  // const [cast, setCast] = useState([]);

  // useEffect(() => {
  //   if (movieId) {
  //     fetchMoviesCast(movieId)
  //       .then(res => setCast(res))
  //       .catch(error => {
  //         console.error('Error fetching movie details:', error);
  //         setCast([]);
  //       });
  //   }
  // }, [movieId]);

  return (
    <div>
      <ul>
        {cast?.length > 0 ? (
          cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  width="120"
                  alt={name}
                />
              ) : (
                <span>No image available</span>
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        ) : (
          <li>No cast available</li>
        )}
      </ul>
    </div>
  );
};

export default CastMovies;
