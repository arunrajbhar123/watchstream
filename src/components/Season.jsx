import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { useState } from 'react';
import styles from '../components/styles/scrollhide.module.css';
import { Slider } from './Slider';
const Season = ({ currentVideo, video, setCurrentVideo, setShow, data }) => {
  const [mapOnly, setMapOnly] = useState(4);
  const [toggle, setToggle] = useState(false);

  return (
    <Box pt="3">
      <Text>2 SEASONS</Text>

      <Box gap={3} className={styles.hideScrollbasr}>
        <Slider
          data={data}
          keyposter="poster_path"
          len={5}
          w="9rem"
          seasons={true}
        />
      </Box>

      <Box p="15px 0">
        {video?.map((el, index) => {
          if (index < mapOnly) {
            return (
              <Flex
                border={currentVideo === index ? '1px solid grey' : 'none'}
                color={
                  currentVideo === index
                    ? 'white'
                    : 'var(--ion-color-secondary-tint)'
                }
                p={2}
                gap={5}
                alignItems="center"
                key={index}
                cursor="pointer"
                rounded={6}
                mb="5"
                onClick={() => {
                  setCurrentVideo(index);
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                  setShow(true);
                }}
              >
                {currentVideo === index ? (
                  <Box fontSize={['12', '22']}>
                    <FaPauseCircle />
                  </Box>
                ) : (
                  <Box fontSize={['12', '22']}>
                    <FaPlayCircle />
                  </Box>
                )}

                <Text
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
        {video?.length > 4 ? (
          toggle ? (
            null
          ) : (
            <Button
              onClick={() => {
                setMapOnly(video.length);
                setToggle(true);
              }}
              w="100%"
            >
              Watch All Videos
            </Button>
          )
        ) : null}
      </Box>
    </Box>
  );
};
export default Season;
