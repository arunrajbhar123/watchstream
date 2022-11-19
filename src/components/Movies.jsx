import React, { useState, useEffect, useContext } from 'react';
import { Box, Text, Grid, Image, Flex } from '@chakra-ui/react';
import { FaBookmark } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import { MovieContext } from './../context api/ContextProvider';

import Loader from './Loader';
import useFetch from './../api call/useFetch';

const Movies = () => {
  const {
    urlPopular,
    handlePage,
    data,
    country,
    handleMultiOverlay,
    multiOverlay,
    handleChangeUrl,
    setPage,
    setData,
    totalTitle,
  } = useContext(MovieContext);
  const location = useLocation();

  const navigate = useNavigate();
  const [contentShow, setContentShow] = useState('Popular');
  const { dsa } = useFetch(urlPopular);
  const EXCTRA_IMG__LINK = 'https://image.tmdb.org/t/p/w500/';
  const content = [
    { text: 'Popular', link: 'movie/popular' },
    { text: 'Upcoming', link: 'movie/upcoming' },
    { text: 'Top Rated', link: 'movie/top_rated' },
  ];
  useEffect(() => {
    let c = document.cookie;

    console.log(c);
  }, []);

  useEffect(() => {
    // handleChangeUrl('movie/popular');
    console.log(location.search);
  }, [handleChangeUrl, location.search]);

  useEffect(() => {
    var id;
    const onScroll = () => {
      if (
        Math.floor(window.innerHeight + document.documentElement.scrollTop) +
          3 >=
        Math.floor(document.documentElement.offsetHeight)
      ) {
        setTimeout(() => {
          handlePage();
        }, 1000);
        return () => clearTimeout(id);
      }
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handlePage]);

  return (
    <Box>
      <Flex alignItems="center" gap={2} pb="15px" position="relative">
        <Text> {totalTitle?.toLocaleString('en-US')} title</Text>
        <Box
          onClick={e => {
            handleMultiOverlay({ popContent: true });
          }}
        >
          sorted by {contentShow}
        </Box>
        <FaAngleDown />
        <Box
          w="250px"
          position="absolute"
          m="auto"
          top="8"
          left="14rem"
          zIndex="160"
          display={multiOverlay.popContent ? 'block' : 'none'}
          px={5}
          p={2}
        >
          {content?.map((el, index) => (
            <Box
              key={index}
              m={2}
              p={2}
              onClick={() => {
                handleChangeUrl(el.link);
                setPage(1);
                setData([]);
                navigate(`/${country}?${el.link.split('/')[1]}`);
                handleMultiOverlay({ popContent: false });
                setContentShow(el.text);
              }}
            >
              {el.text}
            </Box>
          ))}
        </Box>
      </Flex>
      <Grid
        gap={3}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(7, 1fr)',
        }}
      >
        {data?.map((el, index) => (
          <Box key={index} cursor={'pointer'} className="appned">
            <Box position="relative">
              <Box
                position="absolute"
                left="2"
                onClick={e => {
                  e.target.style.color = 'red';
                }}
                color="var(--ion-save-color)"
              >
                <FaBookmark fontSize={22} />
              </Box>

              <Image
                src={EXCTRA_IMG__LINK + el.poster_path}
                alt={'poster'}
                h="100%"
                w="100%"
                rounded={5}
                onClick={() => navigate(`/${country}/${el.title}/${el?.id}`)}
              />

              <Box position="absolute" bottom="2" right="2">
                <Text p="0 5px">TV</Text>
              </Box>
            </Box>
          </Box>
        ))}
        <Box display="flex" justifyContent="center" alignItems="center">
          {true ? <Loader /> : null}
        </Box>
      </Grid>
    </Box>
  );
};

export default Movies;
