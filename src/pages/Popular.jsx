import React, { useState, useContext, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import AllFeature from './../components/AllFeature';
import Movies from './../components/Movies';
import useProvider from './../api call/useProvider';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Slider } from './../components/Slider';
import { MovieContext } from './../context api/ContextProvider';
import { useLocation } from 'react-router-dom';

const Popular = () => {
  const [show, setShow] = useState(true);
  const { provider } = useProvider();
  const { country, setHighlight, handleChangeUrl } = useContext(MovieContext);
  const location = useLocation();
  console.log(provider);

  useEffect(() => {
    if (location.pathname === '/in/tv-show') {
      setHighlight('TV');
      handleChangeUrl(`trending/tv/day`);
    } else if (location.pathname === '/in/movies') {
      setHighlight('Movies');
      handleChangeUrl(`trending/movie/day`);
    } else {
      setHighlight('All');
      handleChangeUrl(`trending/all/day`);
    }
  }, [location.pathname]);

  return (
    <Box pt={{ base: '7rem', md: '7rem', lg: '7rem', xl: '4rem' }}>
      <Flex
        justify="space-between"
        px={{ base: '4', lg: '4', xl: '4.7rem' }}
        m="auto"
        alignItems="center"
        onClick={() => setShow(!show)}
      >
        <Text fontSize={['19', '25']}>
          Welcome to WatchStream {country?.country}
        </Text>
        {show ? (
          <FaAngleDown fontSize={'20'} onClick={() => setShow(!show)} />
        ) : (
          <FaAngleUp fontSize={'20'} onClick={() => setShow(!show)} />
        )}
      </Flex>

      <Box
        px={{ base: '4', lg: '4', xl: '4.7rem' }}
        h={show ? '60px' : 'auto'}
        overflow="hidden"
        onClick={() => setShow(!show)}
      >
        We are glad you're here! On WatchStream you are able to find out where
        to watch your favorite{' '}
        <span
          style={{
            color: '#4694dd',
          }}
        >
          movies
        </span>{' '}
        &{' '}
        <span
          style={{
            color: '#4694dd',
          }}
        >
          tv shows
        </span>{' '}
        in {country?.country}. <br /> WatchStream work this way: Select your
        favorite streaming providers in the WatchBar and see what’s on Netflix,
        Foxtel Now, Stan, Amazon Prime Video and 14 other streaming providers.
        We organized this list of movies and tv shows by popularity to help you
        stream the best online in New-Zealand. Right now, amongst the best
        movies you can watch online, you’ll find Solo: A Star Wars Story, the
        marvel movie Avengers: Infinity War and the horror movie Purge -
        Anarchy. Regarding shows, the most popular shows available on legal
        streaming right now are The Big Bang Theory, The Walking Dead, and
        American Horror Story. <br />
        <br /> Use our filters to find the best content to stream tonight.
        Either you’re a fan of{' '}
        <span
          style={{
            color: '#4694dd',
          }}
        >
          horror
        </span>{' '}
        <span
          style={{
            color: '#4694dd',
          }}
        >
          romantic
        </span>{' '}
        movies or comedies or you simply want to watch some{' '}
        <span
          style={{
            color: '#4694dd',
          }}
        >
          Netflix 4K
        </span>{' '}
        content or you’re searching for a kids movie or tv show to enjoy with
        your children, our filters let you browse and easily find a specific
        movie or TV shows to watch it legally online. We also offer a great
        overview of what’s new in the catalogs of your favorite streaming
        provider(s): see a comprehensive and simple overview of what’s new on
        Netflix, Amazon Prime Video and 8 other legal streaming providers here.
        Streaming market in Australia Australia has 4 major SVOD providers.
        Three of them are Australian (Stan, Presto and Quickflix). Netflix, the
        American SVOD provider launched in Australia on 24th of March. SVOD
        providers and their movie library The libraries of the four providers
        are quite the same in terms of quantity. Each provider has more than
        1000 titles available for streaming. <br />
        <br />
        The real difference is made in terms of the content they are offering.
        Check below the library of each provider to see who is streaming the
        titles you are looking for. Here you can find the titles that just got
        released on your favorite providers. Find out more about us here.
      </Box>
      <Box
        px={{ base: '4', lg: '4', xl: '4rem' }}
        position="sticky"
        top={{ base: '6rem', lg: '6rem', xl: '3rem' }}
        backdropFilter="auto"
        backdropBlur="14px"
        bg="var(--body-color-trans)"
        zIndex={'50'}
        pb={'15px'}
        pt={'10px'}
        boxShadow={show ? '10px -2px 85px 12px #060d17' : null}
      >
        <Slider
          data={provider}
          keyposter="logo_path"
          w="3rem"
          len={13}
          scroll={13}
          radius="10"
        />

        <AllFeature />
      </Box>
      <Box px={{ base: '4', lg: '4', xl: '4rem' }}>
        <Movies />
      </Box>
    </Box>
  );
};

export default Popular;
