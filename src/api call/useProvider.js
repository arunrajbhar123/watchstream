import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';

const useProvider = () => {
  const [provider, setProvider] = useState([]);
  const { country } = useContext(MovieContext);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&watch_region=${country?.country_code}`
      )
      .then(res => {
        setProvider(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return { provider };
};
export default useProvider;
