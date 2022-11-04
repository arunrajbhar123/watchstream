import { Box, Image, useColorModeValue, Flex, Text } from '@chakra-ui/react';
import bg from '../asset/the-white-lotus.webp';
import { FaShareAlt, FaPlay } from 'react-icons/fa';
import poster from '../asset/the-white-lotus (1).webp';
import Season from './../components/Season';
import Poster from './../components/Poster';
import Rating from './../components/Rating';
import Filter from './../components/Filter';
const Moviedetails = () => {
  return (
    <Box pt="4rem">
      <Box h="63vh" overflow="hidden">
        <Box
          position="absolute"
          w="100%"
          bg="transparent"
          h="63vh"
          cursor="pointer"
        >
          <Flex justify="center" alignItems="center" h="100%">
            <FaPlay fontSize="25" bg="red" color="red" />
          </Flex>
        </Box>
        <img
          src={bg}
          alt="bg"
          style={{
            width: '100%',
            height: 'auto',
            top: '4rem',
          }}
        />
      </Box>

      <Box
        bg={useColorModeValue('gray.500', 'gray.900')}
        color={useColorModeValue('gray.500', 'gray.900')}
        boxShadow={'0px -30px 75px 32px black'}
        position="relative"
      >
        .
      </Box>
      <Box
        bg={useColorModeValue('gray.500', 'gray.900')}
        w={['100%', '100%', '78%']}
        position={'relative'}
        m="auto"
        top="-5.7rem"
        rounded="xl"
        p={7}
      >
        <Flex gap="7">
          <Box style={{ width: '33rem', height: '31rem' }}>
            <Box position="relative">
              <img src={poster} alt="poster" />
              <Box position="absolute" bottom="2" right="2">
                <Text bg="#111" color="#fff" p="0 5px">
                  TV
                </Text>
              </Box>
            </Box>
            <Poster />
            <Rating />
          </Box>
          <Box w="100%">
            <Flex justify="space-between">
              <Box>
                <Text fontSize="30">The White Lotus (2021)</Text>
                <Season />
              </Box>

              <Box>
                <FaShareAlt fontSize="25" />
                <Text>share</Text>
              </Box>
            </Flex>
            <Filter />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Moviedetails;
