import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';

const useYearBySorting = years => {
  const { handleData } = useContext(MovieContext);
  // `https://api.themoviedb.org/3/discover/movie?api_key?api_key=${process.env.REACT_APP_KEY}&language=en-US&primary_release_date.gte=${years[0]}-01-01&primary_release_date.lte=${years[1]}-12-29`
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&primary_release_date.gte=${years[0]}-01-01&primary_release_date.lte=${years[1]}-01-01`
      )
      .then(res => {
        handleData(res.data.results);
      });
  }, [years]);

  return {};
};

export default useYearBySorting;
