import axios from 'axios';
import { useEffect, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';

const useUserLocation = () => {
  const { setCountry } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(`https://watchstreamlocation.vercel.app/`)
      .then(res => {
        setCountry(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setCountry]);

  return { setCountry };
};
export default useUserLocation;
