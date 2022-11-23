import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';

const useCasting = movie_id => {
  const [casting, setCasting] = useState([]);
  const { typeContent } = useContext(MovieContext);

  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `https://api.themoviedb.org/3/${typeContent}/${movie_id}/credits?api_key=${process.env.REACT_APP_KEY}&language=en-US&watch_region=IN`
        )
        .then(res => {
          setCasting(res.data.cast);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [typeContent, movie_id]);

  return { casting };
};
export default useCasting;
