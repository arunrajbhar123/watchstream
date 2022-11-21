import React, { useState, useContext } from 'react';
import { Box, Flex, Text, Slide, useDisclosure } from '@chakra-ui/react';
import Sorting from './Sorting';
import { HiFilter } from 'react-icons/hi';
import Mobilefilter from './Mobilefilter';
import { FaTimes } from 'react-icons/fa';
import { MovieContext } from './../context api/ContextProvider';
import { useNavigate } from 'react-router-dom';
const AllFeature = () => {
  const { isOpen, onToggle } = useDisclosure();

  const { handleChangeUrl, country, highlight, setHighlight, setPage } =
    useContext(MovieContext);
  const navigate = useNavigate();
  return (
    <Flex justify="space-between" alignItems="center">
      <Flex
        gap={4}
        fontSize={{ base: '17', lg: '22', xl: '22' }}
        alignItems="center"
      >
        <Box position="relative">
          <Text
            color={highlight === 'All' ? 'white' : 'grey'}
            _before={
              highlight === 'All'
                ? {
                    ...AfterStyle,
                  }
                : null
            }
            onClick={() => {
              setPage(1);
              navigate(`/${country?.country_code?.toLowerCase()}`);
            }}
          >
            All
          </Text>
        </Box>
        <Box position="relative">
          <Text
            color={highlight === 'Movies' ? 'white' : 'grey'}
            _before={
              highlight === 'Movies'
                ? {
                    ...AfterStyle,
                  }
                : null
            }
            onClick={() => {
              setPage(1);
              navigate(`/${country?.country_code?.toLowerCase()}/movies`);
            }}
          >
            Movies
          </Text>
        </Box>
        <Box position="relative">
          <Text
            color={highlight === 'TV' ? 'white' : 'grey'}
            _before={
              highlight === 'TV'
                ? {
                    ...AfterStyle,
                  }
                : null
            }
            onClick={() => {
              setPage(1);
              setHighlight('TV');
              handleChangeUrl(`trending/tv/day`);
              navigate(`/${country?.country_code?.toLowerCase()}/tv-show`);
            }}
          >
            TV Shows
          </Text>
        </Box>
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

      <Box>
        <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
          <Mobilefilter show={onToggle} />
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

const AfterStyle = {
  content: '" "',
  bg: 'red',
  w: '100%',
  h: '3px',

  position: 'absolute',
  bottom: 0,
};
