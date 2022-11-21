import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';

const useWatchProvider = movie_id => {
  const [watchProvider, setWatchProvider] = useState([]);
  const { typeContent } = useContext(MovieContext);

  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `https://api.themoviedb.org/3/${typeContent}/${movie_id}/watch/providers?api_key=${process.env.REACT_APP_KEY}&language=en-US&watch_region=IN`
        )
        .then(res => {
          setWatchProvider(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [typeContent,movie_id]);

  return { watchProvider };
};
export default useWatchProvider;
