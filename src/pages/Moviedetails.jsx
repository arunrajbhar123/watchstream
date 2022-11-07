import { Box, useColorModeValue, Flex, Text } from '@chakra-ui/react';
import { FaShareAlt, FaPlay } from 'react-icons/fa';
import Season from './../components/Season';
import Poster from './../components/Poster';
import Rating from './../components/Rating';
import Filter from './../components/Filter';
import useMovie from './../Axios/useMovie';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useVideo from './../Axios/useVideo';
import useMovieProvider from './../Axios/useMovieProvider';
import useSimilarContent from './../Axios/useSimilarContent';
import SimilarContent from './../components/SimilarContent';

const Moviedetails = () => {
  const parmas = useParams();
  const [reload, setReload] = useState('');
  const { data } = useMovie(reload);
  const { video } = useVideo(parmas.id);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [autoplayQuery, setAutoPlayQuery] = useState('');
  const { movieProvider } = useMovieProvider(parmas.id);
  const { similarContent } = useSimilarContent(parmas.id);

  const [show, setShow] = useState(false);
  const EXCTRA_IMG__LINK = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    setReload(parmas.id);
    setShow(false);
  }, [parmas?.id]);
  useEffect(() => {
    if (show) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      setAutoPlayQuery('?rel=0&autoplay=1');
    } else {
      setAutoPlayQuery('?rel=0&autoplay=0');
    }
  }, [show]);

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
          display={show ? 'block' : 'none'}
          zIndex={106}
        >
          <iframe
            width="77.8%"
            // height={{ base: '7rem', md: '7rem', lg: '7rem', xl: '8rem' }}
            height="375px"
            style={{ margin: 'auto' }}
            src={`https://www.youtube.com/embed/${video[currentVideo]?.key}${autoplayQuery}`}
            title={video[0]?.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <img
          src={EXCTRA_IMG__LINK + data?.backdrop_path}
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
        w={{ base: '100%', md: '100%', lg: '1170px', xl: '1170px' }}
        position={'relative'}
        m="auto"
        top="-8.3rem"
        rounded="xl"
        p={7}
      >
        <Flex gap="7">
          <Box style={{ width: '33rem', height: '31rem' }}>
            <Box position="relative">
              <img src={EXCTRA_IMG__LINK + data?.poster_path} alt="poster" />
              <Box position="absolute" bottom="2" right="2">
                <Text bg="#111" color="#fff" p="0 5px">
                  TV
                </Text>
              </Box>
            </Box>
            <Box
              display={{ base: 'none', md: 'none', lg: 'block', xl: 'block' }}

              // display={['none', 'none', 'none']}
            >
              <Poster />
              <Rating />
            </Box>
          </Box>
          <Box w="100%">
            <Flex justify="space-between">
              <Box>
                <Text fontSize="30">
                  {data.title} ({data.release_date?.split('-')[0]})
                </Text>
              </Box>

              <Box>
                <FaShareAlt fontSize="25" />
                <Text>share</Text>
              </Box>
            </Flex>
            <Season
              video={video}
              setCurrentVideo={setCurrentVideo}
              setShow={setShow}
            />
            <Filter />
            <SimilarContent similarContent={similarContent} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Moviedetails;
