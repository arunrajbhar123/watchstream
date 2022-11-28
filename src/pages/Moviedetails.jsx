import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { FaShareAlt, FaPlay } from 'react-icons/fa';
import Season from './../components/Season';
import Poster from './../components/Poster';
import Rating from './../components/Rating';
import Filter from './../components/Filter';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useMovieDetails } from './../api call/useMovieDetails';
import useVideo from './../api call/useVideo';
import useSimilar from './../api call/useSimilar';
import Footer from '../components/Footer';
import { Slider } from './../components/Slider';
import Loader from './../components/Loader';
import { MovieContext } from './../context api/ContextProvider';
import useCasting from './../api call/useCasting';
import styles from '../components/styles/unselectabletext.module.css';
const Moviedetails = () => {
  const parmas = useParams();
  const { movieData } = useMovieDetails(parmas?.id);
  const { video } = useVideo(parmas?.id);
  const { similar } = useSimilar(parmas?.id);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [autoplayQuery, setAutoPlayQuery] = useState('');
  const [show, setShow] = useState(false);

  const [isLoaderToggle, setIsLoaderToggle] = useState(true);
  const { setTypeContent, EXCTRA_IMG_LINK } = useContext(MovieContext);
  const location = useLocation();
  const { casting } = useCasting(parmas?.id);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  useEffect(() => {
    if (location.pathname.split('/')[2] === 'tv-show') {
      setTypeContent('tv');
    } else {
      setTypeContent('movie');
    }
  }, [location.pathname]);

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
          text: movieData?.title || movieData?.name,
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
      <BackGroundImgIframe
        url={EXCTRA_IMG_LINK + movieData?.backdrop_path}
        show={show}
        setShow={setShow}
        video={video}
        currentVideo={currentVideo}
        autoplayQuery={autoplayQuery}
      />
      <Box
        color="var(--ion-background-color)"
        boxShadow={'10px -10px 105px 132px #060d17'}
        position="relative"
        display={['none', 'none', 'block', 'block']}
      >
        .
      </Box>

      <Box
        bg="var(--ion-background-color)"
        w={['100%', '100%', '100%', '79%']}
        // maxW={'79%'}
        position={'relative'}
        m="auto"
        top={['0rem', '-8.3rem', '-8.3rem', '-8.3rem']}
        rounded="xl"
        p={[0, 4, 7]}
      >
        <Flex gap={5}>
          <ImagePoster
            location={location}
            movieData={movieData}
            url={EXCTRA_IMG_LINK + movieData?.poster_path}
          />
          <Box w="100%">
            <Flex
              justifyContent="space-between"
              pt={['3', '0', '0']}
              px={['2', '0', '0']}
            >
              <Box>
                <Text fontSize={['22', '', '30']}>
                  {movieData?.title ? (
                    <>
                      {movieData?.title} (
                      {movieData?.release_date?.split('-')[0]})
                    </>
                  ) : (
                    <>
                      {movieData?.name} (
                      {movieData?.last_air_date?.split('-')[0]})
                    </>
                  )}
                </Text>
              </Box>

              <Flex
                onClick={() => handleShare()}
                cursor="pointer"
                justifyContent="center"
                alignItems="center"
                direction="column"
                color="var(--ion-color-secondary)"
              >
                <Box fontSize={['22', '', '30']}>
                  <FaShareAlt />
                </Box>
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
              data={movieData?.seasons?.reverse()}
            />

            <Filter movieProvider={movieData?.id} />

            <Slider data={casting} cast={true} len={4} />
            <Text className={styles.unselectable} py="1" fontSize="17">
              SYNOPSIS
            </Text>
            <Text>{movieData?.overview}</Text>
            <Slider
              data={similar}
              setIsLoaderToggle={setIsLoaderToggle}
              title={
                movieData?.title?.toUpperCase() ||
                movieData?.name?.toUpperCase()
              }
              len={4}
              keyposter="poster_path"
            />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
export default Moviedetails;

const BackGroundImgIframe = ({
  url,
  show,
  setShow,
  video,
  currentVideo,
  autoplayQuery,
}) => {
  return (
    <Box
      h={['10rem', '12rem', '20rem', '30rem']}
      overflow="hidden"
      position="relative"
    >
      <Box
        position="absolute"
        w="100%"
        h="100%"
        cursor="pointer"
        display={show ? 'none' : 'block'}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          h="100%"
          mt={['', '-6', '-10', '-10']}
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
          w="100%"
          display={show ? 'block' : 'none'}
          zIndex={5}
        >
          <Box
            w={['100%', '100%', '100%', '80%']}
            m="auto"
            h={['10rem', '', '13rem', '23rem']}
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
      </Box>

      <Image src={url} alt="bg" w="100%" />
    </Box>
  );
};

const ImagePoster = ({ url, movieData, location }) => {
  return (
    <Box display={['none', 'none', 'none', 'block']}>
      <Box position="relative" w={['10rem', '12rem', '18rem', '22rem']}>
        <Image
          src={url}
          draggable="false"
          alt="poster"
          roundedTopLeft={5}
          roundedTopRight={5}
        />
        {location.pathname.split('/')[2] === 'tv-show' ? (
          <Box position="absolute" bottom="2" right="2">
            <Text p="0 5px">TV</Text>
          </Box>
        ) : null}
      </Box>
      <Box display={['none', 'none', 'none', 'block']}>
        <Poster />
        <Box display={['none', 'none', 'none', 'block']}>
          <Rating data={movieData} />
        </Box>
      </Box>
    </Box>
  );
};
