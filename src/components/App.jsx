// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
// import CastMovies from './CastMovies/CastMovies';
// import ReviewsMovies from './ReviewsMovie/ReviewsMovies';
// import MovieDetails from 'pages/MovieDetails';

import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const CastMovies = lazy(() => import('./CastMovies/CastMovies'));
const ReviewsMovies = lazy(() => import('./ReviewsMovie/ReviewsMovies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovies />} />
            <Route path="reviews" element={<ReviewsMovies />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
