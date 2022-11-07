import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './../context api/ContextProvider';
const useVideo = movie_id => {
  const [video, setVideo] = useState([]);
  const { country } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.REACT_APP_KEY}&language=en-US&with_origin_country=${country}`
      )
      .then(res => {
        setVideo(res.data.results);
      });
  }, [country, movie_id]);

  return { video };
};

export default useVideo;
