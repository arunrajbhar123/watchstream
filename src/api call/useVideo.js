import axios from 'axios';
import { useEffect, useState } from 'react';

const useVideo = movie_id => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.REACT_APP_KEY}&language=en-US`
        )
        .then(res => {
          setVideo(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [movie_id]);

  return { video };
};
export default useVideo;
