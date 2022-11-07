import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';
const useMovieProvider = movie_id => {
  const [movieProvider, setMovieProvider] = useState([]);
  const { country } = useContext(MovieContext);
  
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${process.env.REACT_APP_KEY}&language=en-US`
      )
      .then(res => {
        setMovieProvider(res.data);
      });
  }, [ movie_id]);

  return { movieProvider };
};

export default useMovieProvider;
