import { Box, Text, Grid, Image, Flex } from '@chakra-ui/react';
import useSearch from './../api call/useSearch';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';
import { useNavigate, useLocation } from 'react-router-dom';
const Searchresults = () => {
  const [page, setPage] = useState(1);
  const { searchContent } = useSearch(page);
  const { EXCTRA_IMG_LINK, setQuery } = useContext(MovieContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setQuery(location.pathname.split('/')[2]);
  }, [location.pathname]);

  useEffect(() => {
   
    var id;
    const onScroll = () => {
      if (
        Math.floor(window.innerHeight + document.documentElement.scrollTop) +
          3 >=
        Math.floor(document.documentElement.offsetHeight)
      ) {
        setTimeout(() => {
          setPage(page + 1);
         
        }, 1000);
        return () => clearTimeout(id);
      }
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [page]);

  return (
    <Grid
      gap={15}
      pt={{ base: '7rem', md: '7rem', lg: '7rem', xl: '4rem' }}
      px={{ base: '4', lg: '4', xl: '4.7rem' }}
    >
      {/* release_date original_language overview vote_average
       */}

      {searchContent?.map((el, index) => (
        <Flex
          key={index}
          p="5"
          gap={5}
          rounded={10}
          cursor="pointer"
          onClick={() => navigate(`/au/${el.title}/${el?.id}`)}
        >
          <Image src={EXCTRA_IMG_LINK + el.poster_path} w="10rem" rounded={5} />
          <Box>
            <Text fontSize={22}>{el.original_title}</Text>
            <Text>{el.release_date}</Text>
            <Text>{el.original_language}</Text>
            <Text>{el.vote_average}</Text>

            <Text>
              <b> OverView: </b>
              {el.overview}
            </Text>
          </Box>
        </Flex>
      ))}
    </Grid>
  );
};
export default Searchresults;
