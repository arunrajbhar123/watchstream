import { Box, Image, Text, Flex, VStack, Grid } from '@chakra-ui/react';
import poster from '../asset/the-white-lotus (1).webp';
import { FaBookmark, FaPlayCircle } from 'react-icons/fa';

const Season = ({ video, setCurrentVideo, setShow }) => {
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
      <Grid gap={5} p="15px 0">
        {video?.map((el, index) => (
          <Flex
            border="1px solid red"
            p={2}
            gap={5}
            alignItems="center"
            key={index}
            cursor="pointer"
            onClick={() => {
              setCurrentVideo(index);
              setShow(true);
            }}
          >
            <FaPlayCircle />
            <Text
              // w="80%"
              // textOverflow="ellipsis"
              // overflow="hidden"
              // whiteSpace="nowrap"
            >
              {el.name}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};
export default Season;
