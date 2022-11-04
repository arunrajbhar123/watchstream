import { Box, Image, Text, Flex } from '@chakra-ui/react';
import poster from '../asset/the-white-lotus (1).webp';
import { FaBookmark } from 'react-icons/fa';

const Season = () => {
  var arr = [1, 2];
  return (
    <Box pt="3">
      <Text>2 SEASONS</Text>
      <Flex gap={3}>
        {arr?.map((el, index) => (
          <Box key={index} mt="2" position="relative" cursor="pointer">
            <Box position="absolute" left="2">
              <FaBookmark
                color="#848080a6"
                fontSize="25"
                __hover={{ color: '#fff' }}
              />
            </Box>

            <Image rounded="5" src={poster} alt="poster" w="12rem" />
            <Text p="1">SEASON 1</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default Season;
