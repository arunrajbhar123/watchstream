import React, { useState, useEffect } from 'react';
import { Box, Text, Grid, Image, Button } from '@chakra-ui/react';
import poster from '../asset/the-white-lotus (1).webp';
import { FaBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useFetch from './../Axios/useFetch';
const Movies = () => {
  const [page, setPage] = useState(1);
  const { data, total } = useFetch(page);
  const navigate = useNavigate();

  const [height, setHeight] = useState(window.pageYOffset);
  const EXCTRA_IMG__LINK = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    var interval;
    const onScroll = () => {
      console.log(height < window.pageYOffset);
      if (height < window.pageYOffset) {
        clearTimeout(interval);
        if (interval) {
          return clearTimeout;
        }
        interval = setTimeout(() => {
          setPage(page + 1);
        }, 2000);
        setHeight(window.pageYOffset);
      }
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [height, page]);

  return (
    <Box>
      <Text> {total?.toLocaleString('en-US')} title</Text>
      sorted by Trending
      <Grid
        gap={3}
        templateColumns={['repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(7, 1fr)']}
      >
        {data?.map((el, index) => (
          <Box key={index} cursor={'pointer'}>
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
                rounded={5}
                onClick={() => navigate(`/2525`)}
              />
              <Box position="absolute" bottom="2" right="2">
                <Text bg="#111" color="#fff" p="0 5px">
                  TV
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Movies;
