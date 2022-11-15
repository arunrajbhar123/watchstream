import axios from 'axios';
import { useEffect, useState } from 'react';

const useMovieDetails = movie_id => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
        )
        .then(res => {
          setMovieData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [movie_id]);

  return { movieData };
};
export default useMovieDetails;
