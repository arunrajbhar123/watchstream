import React, { useState, useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { HiFilter } from 'react-icons/hi';
import { MovieContext } from './../context api/ContextProvider';
import Years from './filter type/Years';

const Sorting = () => {
  const [show, setShow] = useState({
    year: false,
    genres: false,
    rating: false,
    price: false,
    age: false,
  });

  const { multiOverlay, handleMultiOverlay } = useContext(MovieContext);

  return (
    <Box>
      <Flex gap={6} fontSize={'17'} alignItems="center"
      
      color="var(--ion-color-light-shade)"
      >
        <Flex cursor="text" alignItems="center"
        color='var(--ion-color-secondary)'
        >
          <HiFilter fontSize={19} />
          <Text>Filters</Text>
        </Flex>
        <Flex
          alignItems={'center'}
          position="relative"
          onClick={() => {
            handleMultiOverlay({ year: true });
          }}

        >
          <Text>Release year</Text>
          {show?.year ? <FaAngleUp /> : <FaAngleDown />}
          <Box
           
            top="2rem"
            w="350px"
            position="absolute"
            zIndex={multiOverlay.year ? '160' : 100}
            display={multiOverlay.year ? 'block' : 'none'}
            p={5}
          >
            <Flex justifyContent="center" w="100%">
              1999
              <Box w="100%" px={3}>
                <Years />
              </Box>
              {new Date().getFullYear()}
            </Flex>
          </Box>
        </Flex>
        <Flex alignItems={'center'}>
          <Text>Genres </Text>
          {show?.genres ? <FaAngleUp /> : <FaAngleDown />}
        </Flex>
        <Flex
          position="relative"
          alignItems={'center'}
          onClick={() => {
            handleMultiOverlay({ rating: true });
          }}
        >
          <Text>Rating</Text>
          {show?.rating ? <FaAngleUp /> : <FaAngleDown />}

          <Box
          
            top="2rem"
            w="350px"
            position="absolute"
            zIndex={multiOverlay.rating ? '160' : 100}
            display={multiOverlay.rating ? 'block' : 'none'}
            p={5}
          >
            <Flex>
              0
              <Box w="100%" px={3}>
                <Years />
              </Box>
              10
            </Flex>
          </Box>
        </Flex>
        <Flex alignItems={'center'}>
          <Text>Price</Text>
          {show?.price ? <FaAngleUp /> : <FaAngleDown />}
        </Flex>
        <Flex alignItems={'center'}>
          <Text>Age rating</Text>
          {show?.age ? <FaAngleUp /> : <FaAngleDown />}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sorting;
