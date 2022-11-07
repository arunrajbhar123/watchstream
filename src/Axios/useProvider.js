import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';
const useProvider = page => {
  const [provider, setProvider] = useState([]);
  const { country } = useContext(MovieContext);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US`
      )
      .then(res => {
        setProvider(res.data.results);
      });
  }, []);

  return { provider };
};

export default useProvider;
