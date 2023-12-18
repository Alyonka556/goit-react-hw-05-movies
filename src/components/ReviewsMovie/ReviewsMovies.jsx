import { useHttp } from 'hooks/useHttp';
// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/movies-api';

const ReviewsMovies = () => {
  const { movieId } = useParams();

  const [reviews] = useHttp(fetchMoviesReviews, movieId);

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   if (movieId) {
  //     fetchMoviesReviews(movieId)
  //       .then(res => setReviews(res))
  //       .catch(error => {
  //         console.error('Error fetching movie details:', error);
  //         setReviews([]);
  //       });
  //   }
  // }, [movieId]);

  if (!reviews) {
    return <h1>We don't have any revievs for this movie.</h1>;
  }
  return (
    <div>
      <ul>
        {reviews.length === 0 ? (
          <h2>We don't have any revievs for this movie.</h2>
        ) : (
          reviews?.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReviewsMovies;
