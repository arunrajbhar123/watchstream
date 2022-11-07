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
  const { page, handlePage, data, country } = useContext(MovieContext);
  const { total } = useFetch(page, url);

  const navigate = useNavigate();
  const [show, setShow] = useState({ content: false });
  const [content, setContent] = useState('popular');

  const [height, setHeight] = useState(window.pageYOffset);
  const EXCTRA_IMG__LINK = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    var interval;

    const onScroll = () => {
      if (interval) {
        clearTimeout(interval);
      }
      if (height < window.pageYOffset) {
        interval = setTimeout(() => {
          handlePage();
        }, 2000);
        setHeight(window.pageYOffset);
      }
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [height]);

  useEffect(() => {
    const dsa = document.querySelector('.appned')?.lastChild;
  }, []);

  return (
    <Box>
      <Flex alignItems="center" gap={2} pb="15px" position="relative">
        <Text> {total?.toLocaleString('en-US')} title</Text>
        <Box
          onClick={e => {
            setShow({ ...show, ['content']: true });
          }}
        >
          sorted by {content}
        </Box>
        <FaAngleDown />
        <Box
          w="250px"
          h="350px"
          bg="#111"
          position="absolute"
          m="auto"
          top="8"
          left="14rem"
          zIndex="12"
          display={show.content ? 'block' : 'none'}
        ></Box>
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
