import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';

const useVideo = movie_id => {
  const [video, setVideo] = useState([]);
  const { typeContent } = useContext(MovieContext);
  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `https://api.themoviedb.org/3/${typeContent}/${movie_id}/videos?api_key=${process.env.REACT_APP_KEY}&language=en-US`
        )
        .then(res => {
          setVideo(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [typeContent, movie_id]);

  return { video };
};
export default useVideo;
