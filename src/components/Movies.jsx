import React, { useState, useEffect, useContext } from 'react';
import { Box, Text, Grid, Image, Flex } from '@chakra-ui/react';
import { FaBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import { MovieContext } from './../context api/ContextProvider';
import useFetch from './../Axios/useFetch';
import Loader from './Loader';

const Movies = () => {
  const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/popular');
  const { page, handlePage, data, country, handleMultiOverlay, multiOverlay } =
    useContext(MovieContext);
  const { total } = useFetch(page, url);

  const navigate = useNavigate();
  const [contentShow, setContentShow] = useState('Popular');

  const EXCTRA_IMG__LINK = 'https://image.tmdb.org/t/p/w500/';
  const content = [
    { text: 'Popular', link: 'popular' },
    { text: 'Upcoming', link: 'upcoming' },
    { text: 'Top Rated', link: 'top_rated' },
  ];
  useEffect(() => {
    const onScroll = () => {
      if (
        Math.floor(window.innerHeight + document.documentElement.scrollTop) +
          3 >=
        Math.floor(document.documentElement.offsetHeight)
      ) {
        handlePage();
      }
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handlePage]);

  return (
    <Box>
      <Flex alignItems="center" gap={2} pb="15px" position="relative">
        <Text> {total?.toLocaleString('en-US')} title</Text>
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
          bg="#111"
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
              bg="red"
              m={2}
              p={2}
              onClick={() => {
                navigate(`/au?${el.link}`);
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
                <Text bg="#111" color="#fff" p="0 5px">
                  TV
                </Text>
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
