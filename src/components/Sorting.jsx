import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { HiFilter } from 'react-icons/hi';

const Sorting = () => {
  const [show, setShow] = useState({
    year: false,
    genres: false,
    rating: false,
    price: false,
    age: false,
  });
  return (
    <Box>
      <Flex gap={2}>
        <Flex cursor="text" alignItems="center">
          <HiFilter fontSize={19} />
          <Text>Filters</Text>
        </Flex>
        <Flex alignItems={'center'}>
          <Text>Release year</Text>
          {show?.year ? <FaAngleUp /> : <FaAngleDown />}
        </Flex>
        <Flex alignItems={'center'}>
          <Text>Genres </Text>
          {show?.genres ? <FaAngleUp /> : <FaAngleDown />}
        </Flex>
        <Flex alignItems={'center'}>
          <Text>Rating</Text>
          {show?.rating ? <FaAngleUp /> : <FaAngleDown />}
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
