import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';
const useMovie = movie_id => {
  const [data, setData] = useState([]);
  const { country } = useContext(MovieContext);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
      )
      .then(res => {
        setData(res.data);
      });
  }, [ movie_id]);

  return { data };
};

export default useMovie;
