import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';
const useSearch = query => {
  const [search, setSearch] = useState([]);
  const { country } = useContext(MovieContext);

  useEffect(() => {
    if (query !== '') {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
        )
        .then(res => {
          setSearch(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [query]);

  return { search };
};

export default useSearch;
