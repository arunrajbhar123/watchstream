import { createContext, useState } from 'react';
export const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [overlay, setOverlay] = useState(false);
  const [country, setCountry] = useState('au');
  const [multiOverlay, setMultiOverlay] = useState({
    rating: false,
    year: false,
    popContent: false,
  });
  const handlePage = () => {
    setPage(page + 1);
  };
  const handleData = info => {
    setData(info);
  };

  const handleCountry = val => {
    setCountry(val);
  };

  const handleOverlay = val => {
    setOverlay(val);
  };

  const handleMultiOverlay = val => {
    setMultiOverlay(val);
  };

  return (
    <MovieContext.Provider
      value={{
        handleMultiOverlay,
        multiOverlay,
        overlay,
        handleOverlay,
        country,
        handleCountry,
        data,
        page,
        handlePage,
        handleData,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
