import axios from 'axios';
import { useEffect, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';

const useUserLocation = () => {
  const { setCountry } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(`https://ip-location-without-db.vercel.app/`)
      .then(res => {
        setCountry(res.data);
      })
      .catch(err => {
        setCountry({
          success: true,
          type: 'IPv4',
          continent: 'Asia',
          continent_code: 'AS',
          country: 'India',
          country_code: 'IN',
        });
        console.log(err);
      });
  }, [setCountry]);

  return { setCountry };
};
export default useUserLocation;
