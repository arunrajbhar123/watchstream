import { Box, Image, Text, Flex, VStack, Grid, Button } from '@chakra-ui/react';
import poster from '../asset/the-white-lotus (1).webp';
import { FaBookmark, FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { useState } from 'react';
import styles from '../components/styles/scrollhide.module.css';
const Season = ({ currentVideo, video, setCurrentVideo, setShow }) => {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [mapOnly, setMapOnly] = useState(4);
  const [toggle, setToggle] = useState(false);
  return (
    <Box pt="3">
      <Text>2 SEASONS</Text>

      <Flex gap={3} className={styles.hideScrollbasr} w="750px">
        {arr?.length >= 1 &&
          arr?.map((el, index) => (
            <Box key={index} mt="2" position="relative" cursor="pointer">
              <Box position="absolute" left="2">
                <FaBookmark
                  color="#848080a6"
                  fontSize="25"
                  __hover={{ color: '#fff' }}
                />
              </Box>

              <Box w="150px">
                <Image rounded="5" src={poster} alt="poster" />
              </Box>
              <Text p="1">SEASON 1</Text>
            </Box>
          ))}
      </Flex>

      <Grid gap={5} p="15px 0">
        {video?.map((el, index) => {
          if (index < mapOnly) {
            return (
              <Flex
                border={currentVideo === index ? '1px solid red' : 'none'}
                p={2}
                gap={5}
                alignItems="center"
                key={index}
                cursor="pointer"
                rounded={6}
                onClick={() => {
                  setCurrentVideo(index);
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                  setShow(true);
                }}
              >
                {currentVideo === index ? <FaPauseCircle /> : <FaPlayCircle />}

                <Text
                  w="600px"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {el.name}
                </Text>
              </Flex>
            );
          }
        })}
        {video?.length > 3 ? (
          toggle ? (
            <Button
              onClick={() => {
                setMapOnly(4);
                setToggle(false);
              }}
            >
              Less Video Watch
            </Button>
          ) : (
            <Button
              onClick={() => {
                setMapOnly(video.length);
                setToggle(true);
              }}
            >
              Watch All Videos
            </Button>
          )
        ) : null}
      </Grid>
    </Box>
  );
};
export default Season;
