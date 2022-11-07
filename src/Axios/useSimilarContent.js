import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';
const useSimilarContent = movie_id => {
  const [similarContent, setSimilarContent] = useState([]);
  const { country } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.REACT_APP_KEY}&language=en-US`
      )
      .then(res => {
        setSimilarContent(res.data.results);
      });
  }, [ movie_id]);

  return { similarContent };
};

export default useSimilarContent;
