import axios from 'axios';
import { useEffect, useState } from 'react';

const useSimilar = movie_id => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_KEY}&language=en-US`
        )
        .then(res => {
          setSimilar(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [movie_id]);

  return { similar };
};
export default useSimilar;
