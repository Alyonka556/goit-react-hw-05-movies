import React, { useEffect } from 'react';
import { fetchMoviesTrend } from 'services/movies-api';

export const TrendingToday = () => {
  useEffect(() => {
    fetchMoviesTrend();
  }, []);
  return <div>Trending Today</div>;
};
