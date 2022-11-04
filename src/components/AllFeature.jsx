import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Sorting from './Sorting';

const AllFeature = () => {
  return (
    <Box>
      <Flex gap={2} fontSize={22}>
        <Text>All</Text>
        <Text>Movies</Text>
        <Text>TV Shows</Text>
        <Sorting />
      </Flex>
    </Box>
  );
};

export default AllFeature;
