import { Box, Text, Grid, Image, Flex } from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { MovieContext } from './../context api/ContextProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import Loader from './../components/Loader';
import { SearchresultPage } from '../api call/useSearch.js';
const Searchresults = () => {
  const [page, setPage] = useState(1);

  const { EXCTRA_IMG_LINK, country } = useContext(MovieContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchPage, setSerachPage] = useState();
  const { searchResultData, setSearchResultData } = SearchresultPage(
    searchPage,
    page
  );

  useEffect(() => {
    setSerachPage(location.pathname.split('/')[2]);
    setSearchResultData([]);
    setPage(1);
    setDelay(true);
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
  const [delay, setDelay] = useState(true);
  if (searchResultData?.length !== 0) {
    setTimeout(() => {
      setDelay(false);
    }, 3000);
  }

  if (delay) {
    return (
      <Box
        pt={{ base: '20rem', md: '25rem', lg: '25rem', xl: '25rem' }}
        px={{ base: '4', lg: '4', xl: '4.7rem' }}
        h="100vh"
      >
        <Loader />
      </Box>
    );
  }
  return (
    <Grid
      gap={15}
      pt={{ base: '7rem', md: '7rem', lg: '7rem', xl: '4rem' }}
      px={{ base: '4', lg: '4', xl: '4.7rem' }}
    >
      {searchResultData?.map((el, index) => (
        <Flex
          key={index}
          p="5"
          gap={5}
          overflow="hidden"
          h={['250px', '350px']}
          rounded={10}
          cursor="pointer"
          onClick={() =>
            navigate(
              `/${country?.country_code?.toLowerCase().toLowerCase()}/${
                el.title
              }/${el?.id}`
            )
          }
        >
          {el.backdrop_path !== null ? (
            <Image
              w={['10rem', '200px']}
              h={['200px', '300px']}
              src={EXCTRA_IMG_LINK + el.poster_path}
              rounded={5}
            />
          ) : (
            <Box
              w={['350px', '200px']}
              h={['200px', '300px']}
              textAlign="center"
              pt={['5rem', '8rem']}
              rounded={5}
            >
              <Text
                style={{
                  transform: ' rotate(-60deg)',
                }}
                fontSize={['', '1.2rem']}
              >
                Image Not Available
              </Text>
            </Box>
          )}

          <Box>
            <Text fontSize={22}>{el.original_title}</Text>
            <Text>{el.release_date}</Text>
            <Text>{el.original_language}</Text>
            <Text>{el.vote_average}</Text>

            <b> OverView: </b>
            <Text w={['150px', '500px']} overflow="hidden">
              {el.overview}
            </Text>
          </Box>
        </Flex>
      ))}
    </Grid>
  );
};
export default Searchresults;
