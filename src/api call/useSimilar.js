import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';

const useSimilar = movie_id => {
  const [similar, setSimilar] = useState([]);
const {typeContent}=useContext(MovieContext)
  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `https://api.themoviedb.org/3/${typeContent}/${movie_id}/recommendations?api_key=${process.env.REACT_APP_KEY}&language=en-US`
        )
        .then(res => {
          setSimilar(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [typeContent,movie_id]);

  return { similar };
};
export default useSimilar;
