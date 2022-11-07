import React, { useContext } from 'react';
import { Box, Flex, Text, Slide, useDisclosure } from '@chakra-ui/react';
import Sorting from './Sorting';
import { HiFilter } from 'react-icons/hi';
import Mobilefilter from './Mobilefilter';
import { MovieContext } from './../context api/ContextProvider';
import { FaTimes } from 'react-icons/fa';
const AllFeature = () => {
  // const {  isOpen,setMobileFilter } = useContext(MovieContext);
  const { isOpen, onToggle } = useDisclosure();
  console.log(isOpen);
  return (
    <Flex justify="space-between" alignItems="center">
      <Flex gap={4} fontSize={{ base: '17', lg: '22', xl: '22' }} alignItems="center">
        <Text>All</Text>
        <Text>Movies</Text>
        <Text>TV Shows</Text>
        <Box display={{ base: 'none', lg: 'block', xl: 'block' }}>
          <Sorting />
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <HiFilter fontSize={20} onClick={onToggle} />
        </Box>
        <Box display={{ base: 'none', md: 'block', lg: 'none', xl: 'none' }}>
          <Flex alignItems="center">
            <HiFilter fontSize={20} onClick={onToggle} />
            <Text fontSize={'17'}>Filter</Text>
          </Flex>
        </Box>
      </Flex>

      <Box
      // ml={mobileFilter ? '0rem' : '-52rem'}
      // display={mobileFilter ? 'block' : 'none'}
      >
        <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}

        >
          <Mobilefilter
            show={onToggle}

          />
        </Slide>
      </Box>

      <Flex alignItems="center" gap={1}>
        <FaTimes />
        <Text>RESET</Text>
      </Flex>
    </Flex>
  );
};

export default AllFeature;
