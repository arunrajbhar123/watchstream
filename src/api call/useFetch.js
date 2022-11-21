import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MovieContext } from './../context api/ContextProvider';
const useFetch = url => {
  const { handleData, data, page, setTotalTitle, setIsLoading } =
    useContext(MovieContext);
 
  const [lastUrl, setLastUrl] = useState();
  useEffect(() => {
    setIsLoading({ movies: true });
   
    if (lastUrl !== url) {
      handleData([]);
    }
    setLastUrl(url);

    axios
      .get(url + `&page=${page}&with_original_language=hi`)
      .then(res => {
        handleData([...data, ...res.data.results]);
        setTotalTitle(res.data.total_results);
        setIsLoading({ movies: false });
      })
      .catch(err => {
        console.log(err);
      });
  }, [lastUrl, page, url]);

  return {};
};
export default useFetch;
