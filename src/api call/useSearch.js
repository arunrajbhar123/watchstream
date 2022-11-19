import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';
const useSearch = page => {
  const [searchContent, setSearchContent] = useState([]);
  const { query } = useContext(MovieContext);

  useEffect(() => {
    if (query !== '' && query !== undefined) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${query}&include_adult=false`
        )
        .then(res => {
          setSearchContent(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [query]);

  return { searchContent };
};

const SearchresultPage = (query, page) => {
  const [searchResultData, setSearchResultData] = useState([]);
  useEffect(() => {
    if (query !== undefined && query !== '') {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
        )
        .then(res => {
          setSearchResultData([...searchResultData, ...res.data.results]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [page, query]);
  return { searchResultData, setSearchResultData };
};

export { SearchresultPage, useSearch };
