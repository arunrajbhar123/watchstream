
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';
const useCountry = () => {
  const { country, handleCountry } = useContext(MovieContext);

  useEffect(() => {
    axios.get(`https://watchstreamlocation.vercel.app/`).then(res => {
      handleCountry(res.data.country_code.toLowerCase());
    });
  }, []);

  return { country };
};

export default useCountry;
