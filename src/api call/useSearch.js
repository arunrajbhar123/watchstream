import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';
const useSearch = page => {
  const [searchContent, setSearchContent] = useState([]);
  const { query } = useContext(MovieContext);
  const [newQuery, setNewQuery] = useState('');

  useEffect(() => {
    if (query !== newQuery) {
      setNewQuery(query);
      setSearchContent([]);
    }

    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
        )
        .then(res => {
          setSearchContent([...searchContent, ...res.data.results]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [page, query]);

  return { searchContent };
};
export default useSearch;
