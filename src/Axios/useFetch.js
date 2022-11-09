import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';
import { useLocation } from 'react-router-dom';
const useFetch = (page, url) => {
  const { data, handleData } = useContext(MovieContext);
  const [total, setTotal] = useState();
  const params = useLocation();
  const [currentUrl, setCurrentUrl] = useState(
    `${url}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
  );
  console.log(data);
  useEffect(() => {
    axios.get(currentUrl).then(res => {
      handleData([...data, ...res.data.results]);
      setTotal(res.data.total_results);
    });
  }, [page]);

  useEffect(
    (page = 1) => {
      setCurrentUrl(
        `https://api.themoviedb.org/3/movie/${params.search.substring(
          1
        )}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
      );
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.search.substring(
            1
          )}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
        )
        .then(res => {
          handleData(res.data.results);
          setTotal(res.data.total_results);
        });
    },
    [params.search]
  );

  return { data, total };
};

export default useFetch;
