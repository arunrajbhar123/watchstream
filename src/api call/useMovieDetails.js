import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';

const useMovieDetails = movie_id => {
  const [movieData, setMovieData] = useState([]);
  const { typeContent } = useContext(MovieContext);

  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `https://api.themoviedb.org/3/${typeContent}/${movie_id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
        )
        .then(res => {
          setMovieData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [typeContent, movie_id]);

  return { movieData };
};

export { useMovieDetails };
