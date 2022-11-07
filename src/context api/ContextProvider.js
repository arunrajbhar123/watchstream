import { createContext, useState } from 'react';
export const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
 
  const [country, setCountry] = useState('au');
  const handlePage = () => {
    setPage(page + 1);
  };
  const handleData = info => {
    setData([...data, ...info]);
  };

  const handleCountry = val => {
    setCountry(val);
  };



  return (
    <MovieContext.Provider
      value={{ country, handleCountry, data, page, handlePage, handleData }}
    >
      {children}
    </MovieContext.Provider>
  );
};
