import { useEffect, useState } from 'react';
// import { fetchMoviesId } from 'services/movies-api';

export const useHttp = (fetchFn, params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    if (params) {
      fetchFn(params)
        .then(data => setData(data))
        .catch(error => {
          setError(error.message);
          setData([]);
        });
    }
  }, [params, fetchFn]);

  return [data, setData, error];
};
