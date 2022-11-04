import { useEffect, useState } from 'react';
import axios from 'axios';
const useFetch = page => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
      )
      .then(res => {
        const dsa = res.data.results;
        setData([...data, ...dsa]);
        setTotal(res.data.total_results);
      });
  }, [page]);

  return { data, total };
};
export default useFetch;
