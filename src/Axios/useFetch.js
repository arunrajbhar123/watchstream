import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';
const useFetch = (page, url) => {
  const { data, handleData, country } = useContext(MovieContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    axios
      .get(
        `${url}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
      )
      .then(res => {
        handleData(res.data.results);
        setTotal(res.data.total_results);
      });
  }, [page]);

  return { data, total };
};

export default useFetch;
