import axios from 'axios';
import { useContext, useEffect } from 'react';
import { MovieContext } from './../context api/ContextProvider';
const useFetch = url => {
  const { handleData, data, page, setTotalTitle, setIsLoading ,country} =
    useContext(MovieContext);
  useEffect(() => {
    setIsLoading({ movies: true });
    axios
      .get(url + `&page=${page}&with_original_language=${country}`)
      .then(res => {
        handleData([...data, ...res.data.results]);
        setTotalTitle(res.data.total_results);
        setIsLoading({ movies: false });
      })
      .catch(err => {
        console.log(err);
      });
  }, [page, url]);

  return {};
};
export default useFetch;
