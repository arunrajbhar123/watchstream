import { Box, useColorModeValue, Flex, Text, Image } from '@chakra-ui/react';
import { FaShareAlt, FaPlay } from 'react-icons/fa';
import Season from './../components/Season';
import Poster from './../components/Poster';
import Rating from './../components/Rating';
import Filter from './../components/Filter';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMovieDetails from './../api call/useMovieDetails';
import useVideo from './../api call/useVideo';
import useSimilar from './../api call/useSimilar';
import Footer from '../components/Footer';
import { Slider } from './../components/Slider';

const Moviedetails = () => {
  const parmas = useParams();
  const { movieData } = useMovieDetails(parmas?.id);
  const { video } = useVideo(parmas?.id);
  const { similar } = useSimilar(parmas?.id);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [autoplayQuery, setAutoPlayQuery] = useState('');
  const [show, setShow] = useState(false);
  const EXCTRA_IMG__LINK = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    setShow(false);
  }, [parmas?.id]);
  useEffect(() => {
    if (show) {
      setAutoPlayQuery('?rel=0&autoplay=1&controls=0&showinfo=0');
    } else {
      setAutoPlayQuery('?rel=0&autoplay=0');
    }
  }, [show]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.canShare) {
      try {
        await navigator.share({
          title: 'Images',
          text: 'Beautiful images',
          url,
        });
      } catch (error) {
        console.log('err', error.message);
        // output.textContent = `Error: ${error.message}`;
      }
    }
  };

  return (
    <Box pt={{ base: '7rem', md: '7rem', lg: '7rem', xl: '4rem' }}>
      <Box h="63vh" overflow="hidden">
        <Box
          position="absolute"
          w="100%"
          bg="transparent"
          h="50vh"
          cursor="pointer"
          display={show ? 'none' : 'block'}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            h="100%"
            onClick={() => {
              setShow(true);
            }}
          >
            <FaPlay fontSize="25" bg="red" color="red" />
          </Flex>
        </Box>

        <Box
          position="absolute"
          w="100%"
          m="auto"
          h="auto"
          display={show ? 'block' : 'none'}
          zIndex={106}
        >
          <iframe
            width="77.8%"
            // height={{
            //   base: '7rem',
            //   sm: '380px',
            //   md: '380px',
            //   lg: '380px',
            //   xl: '380px',
            //   '2xl': '380px',
            // }}
            height={['395px']}
            style={{ margin: 'auto' }}
            src={`https://www.youtube.com/embed/${video[currentVideo]?.key}${autoplayQuery}`}
            title={video[0]?.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <Image
          src={EXCTRA_IMG__LINK + movieData?.backdrop_path}
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
        w={{ base: '100%', md: '100%', lg: '1170px', xl: '1184px' }}
        position={'relative'}
        m="auto"
        top="-8.3rem"
        rounded="xl"
        p={7}
      >
        <Flex gap="7">
          <Box display={{ base: 'none', md: 'none', lg: 'block', xl: 'block' }}>
            <Box position="relative" w="22rem">
              <Image
                src={EXCTRA_IMG__LINK + movieData?.poster_path}
                alt="poster"
                rounded={5}
              />
              <Box position="absolute" bottom="2" right="2">
                <Text bg="#111" color="#fff" p="0 5px">
                  TV
                </Text>
              </Box>
            </Box>
            <Box
              display={{ base: 'none', md: 'none', lg: 'block', xl: 'block' }}
            >
              <Poster />
              <Box
                display={{ base: 'none', md: 'none', lg: 'none', xl: 'block' }}
              >
                <Rating data={movieData} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Flex justify="space-between">
              <Box>
                <Text fontSize="30">
                  {movieData?.title} ({movieData?.release_date?.split('-')[0]})
                </Text>
              </Box>

              <Box onClick={() => handleShare()} cursor="pointer">
                <FaShareAlt fontSize="25" />
                <Text>share</Text>
              </Box>
            </Flex>

            <Season
              video={video}
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
              setShow={setShow}
            />

            <Filter movieProvider={'movieProvider'} />
            <Slider data={similar} />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
export default Moviedetails;
