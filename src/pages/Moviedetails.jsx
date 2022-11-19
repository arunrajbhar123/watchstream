import { Box, Grid, Flex, Text, Image } from '@chakra-ui/react';
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
import Loader from './../components/Loader';

const Moviedetails = () => {
  const parmas = useParams();
  const { movieData } = useMovieDetails(parmas?.id);
  const { video } = useVideo(parmas?.id);
  const { similar } = useSimilar(parmas?.id);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [autoplayQuery, setAutoPlayQuery] = useState('');
  const [show, setShow] = useState(false);
  const EXCTRA_IMG__LINK = 'https://image.tmdb.org/t/p/w500/';
  const [isLoaderToggle, setIsLoaderToggle] = useState(true);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

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
          text: movieData?.title,
          url,
        });
      } catch (error) {
        console.log('err', error.message);
      }
    }
  };

  if (movieData?.length !== 0) {
    setTimeout(() => {
      setIsLoaderToggle(false);
    }, 1000);
  }

  if (isLoaderToggle) {
    return (
      <Box
        pt={{ base: '10rem', md: '10rem', lg: '10rem', xl: '10rem' }}
        h="100vh"
      >
        <Loader />
      </Box>
    );
  }

  return (
    <Box pt={{ base: '7rem', md: '7rem', lg: '7rem', xl: '4rem' }}>
      <Box h={['38vh', '', '63vh']} overflow="hidden">
        <Box
          position="absolute"
          w="100%"
          h={['25vh', '', '50vh']}
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

        <Box position="relative">
          <Box
            position="absolute"
            w={['100%', '', '78.6%']}
            h={['215px', '', '395px']}
            display={show ? 'block' : 'none'}
            zIndex={106}
            left={['0', '', '10.7%']}
            m="auto"
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video[currentVideo]?.key}${autoplayQuery}`}
              title={video[0]?.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
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
        color="var(--ion-background-color)"
        boxShadow={'10px -10px 105px 132px #060d17'}
        position="relative"
      >
        .
      </Box>
      <Box
        bg="var(--ion-background-color)"
        w={{ base: '100%', md: '100%', lg: '1170px', xl: '1184px' }}
        position={'relative'}
        m="auto"
        top="-8.3rem"
        rounded="xl"
        p={[0, 0, 7]}
      >
        <Flex justifyContent="space-between" gap={5}>
          <Box display={{ base: 'none', md: 'none', lg: 'block', xl: 'block' }}>
            <Box position="relative" w="22rem">
              <Image
                src={EXCTRA_IMG__LINK + movieData?.poster_path}
                alt="poster"
                roundedTopLeft={5}
                roundedTopRight={5}
              />
              <Box position="absolute" bottom="2" right="2">
                <Text p="0 5px">TV</Text>
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

          <Box w="100%">
            <Flex justifyContent="space-between" pt="3" pr="3">
              <Box>
                <Text fontSize={['22', '30']}>
                  {movieData?.title} ({movieData?.release_date?.split('-')[0]})
                </Text>
              </Box>

              <Flex
                onClick={() => handleShare()}
                cursor="pointer"
                fontSize={['17', '25']}
                justifyContent="center"
                alignItems="center"
                direction="column"
                color="var(--ion-color-secondary)"
              >
                <FaShareAlt />
                <Text
                  display={{
                    base: 'none',
                    md: 'none',
                    lg: 'none',
                    xl: 'block',
                  }}
                  fontSize={['12']}
                >
                  Share
                </Text>
              </Flex>
            </Flex>

            <Season
              video={video}
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
              setShow={setShow}
            />
            <Filter movieProvider={'movieProvider'} />

            <Slider
              data={similar}
              setIsLoaderToggle={setIsLoaderToggle}
              title={movieData?.title?.toUpperCase()}
            />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
export default Moviedetails;
