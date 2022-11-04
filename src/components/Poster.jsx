import { Box, Text, Flex, Grid } from '@chakra-ui/react';
import { FaBookmark, FaCheck } from 'react-icons/fa';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
const Poster = () => {
  return (
    <Flex bg="black" gap="5" p="5" pt="5" pb="2" justify="space-around">
      <Flex
        flexDirection="column"
        justify="center"
        alignItems="center"
        gap={1}
        cursor="pointer"
      >
        <FaBookmark />
        <Text>Tracking</Text>
      </Flex>
      <Flex
        flexDirection="column"
        justify="center"
        alignItems="center"
        gap={1}
        cursor="pointer"
      >
        <FaCheck />
        <Text>Seen All</Text>
      </Flex>
      <Flex
        flexDirection="column"
        justify="center"
        alignItems="center"
        gap={1}
        cursor="pointer"
      >
        <HiThumbUp />
        <Text>Like</Text>
      </Flex>
      <Flex
        flexDirection="column"
        justify="center"
        alignItems="center"
        gap={1}
        cursor="pointer"
      >
        <HiThumbDown />
        <Text>Dislike</Text>
      </Flex>
    </Flex>
  );
};
export default Poster;
