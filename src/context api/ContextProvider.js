import { createContext, useState } from 'react';
export const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalTitle, setTotalTitle] = useState('');
  const [overlay, setOverlay] = useState(false);
  const [country, setCountry] = useState('en');
  const [multiOverlay, setMultiOverlay] = useState({
    rating: false,
    year: false,
    popContent: false,
  });
  const [isLoading, setIsLoading] = useState({
    movies: false,
  });

  const [query, setQuery] = useState('');

  const [urlPopular, setUrlPopular] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}`
  );
  const EXCTRA_IMG_LINK = 'https://image.tmdb.org/t/p/w500/';

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
  const handleChangeUrl = val => {
    setUrlPopular(
      `https://api.themoviedb.org/3/${val}?api_key=${process.env.REACT_APP_KEY}`
    );
  };

  return (
    <MovieContext.Provider
      value={{
        setQuery,
        EXCTRA_IMG_LINK,
        query,
        totalTitle,
        setTotalTitle,
        setPage,
        setData,
        handleChangeUrl,
        isLoading,
        setIsLoading,
        urlPopular,
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
