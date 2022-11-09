import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import AllFeature from './../components/AllFeature';
import ListOfProvider from './../components/ListOfProvider';

import Movies from './../components/Movies';
import styles from '../components/styles/scrollhide.module.css';

import useProvider from './../Axios/useProvider';
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleRight,
  FaAngleLeft,
} from 'react-icons/fa';
const Popular = () => {
  const [show, setShow] = useState(true);
  const { provider } = useProvider();
  const EXCTRA_IMG__LINK = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    const onScroll = () => {};
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box pt={{ base: '7rem', md: '7rem', lg: '7rem', xl: '4rem' }}>
      <Flex
        justify="space-between"
        px={{ base: '4', lg: '4', xl: '4.7rem' }}
        m="auto"
      >
        <Text fontSize={'25'}>Welcome to JustWatch Australia</Text>
        {show ? (
          <FaAngleDown onClick={() => setShow(false)} />
        ) : (
          <FaAngleUp onClick={() => setShow(true)} />
        )}
      </Flex>

      <Box
        px={{ base: '4', lg: '4', xl: '4.7rem' }}
        h={show ? '65px' : 'auto'}
        overflow="hidden"
        mb="25px"
      >
        We are glad you're here! On JustWatch you are able to find out where to
        watch your favorite movies & tv shows in Australia. JustWatch work this
        way: Select your favorite streaming providers in the WatchBar and see
        what’s on Netflix, Foxtel Now, Stan, Amazon Prime Video and 14 other
        streaming providers. We organized this list of movies and tv shows by
        popularity to help you stream the best online in New-Zealand. Right now,
        amongst the best movies you can watch online, you’ll find Solo: A Star
        Wars Story, the marvel movie Avengers: Infinity War and the horror movie
        Purge - Anarchy. Regarding shows, the most popular shows available on
        legal streaming right now are The Big Bang Theory, The Walking Dead, and
        American Horror Story. Use our filters to find the best content to
        stream tonight. Either you’re a fan of horror movies or romantic
        comedies or you simply want to watch some Netflix 4K content or you’re
        searching for a kids movie or tv show to enjoy with your children, our
        filters let you browse and easily find a specific movie or TV shows to
        watch it legally online. We also offer a great overview of what’s new in
        the catalogs of your favorite streaming provider(s): see a comprehensive
        and simple overview of what’s new on Netflix, Amazon Prime Video and 8
        other legal streaming providers here. Streaming market in Australia
        Australia has 4 major SVOD providers. Three of them are Australian
        (Stan, Presto and Quickflix). Netflix, the American SVOD provider
        launched in Australia on 24th of March. SVOD providers and their movie
        library The libraries of the four providers are quite the same in terms
        of quantity. Each provider has more than 1000 titles available for
        streaming. The real difference is made in terms of the content they are
        offering. Check below the library of each provider to see who is
        streaming the titles you are looking for. Here you can find the titles
        that just got released on your favorite providers. Find out more about
        us here.
      </Box>
      <Box
        px={{ base: '4', lg: '4', xl: '4rem' }}
        position="sticky"
        top={{ base: '6rem', lg: '6rem', xl: '3rem' }}
        backdropFilter="auto"
        backdropBlur="14px"
        zIndex={'105'}
        pb={'15px'}
        pt={'15px'}
      >
        <Flex
          position={'relative'}
          alignItems="center"
          mb="2"
          onMouseEnter={() => {
            const show = document.querySelectorAll('.arrowShow');
            show[0].style.display = 'block';
            show[1].style.display = 'block';
          }}
          onMouseLeave={() => {
            const show = document.querySelectorAll('.arrowShow');
            show[0].style.display = 'none';
            show[1].style.display = 'none';
          }}
        >
          <Box {...SliderIcon} className={'arrowShow'}>
            <FaAngleLeft fontSize={25} />
          </Box>
          <Flex
            gap={2}
            className={styles.hideScrollbasr}
            h="4rem"
            position="relative"
            p="8px 0"
          >
            {provider?.map((el, index) => (
              <ListOfProvider
                key={index}
                icon={EXCTRA_IMG__LINK + el.logo_path}
              />
            ))}
          </Flex>
          <Box {...SliderIcon} right={0} className={'arrowShow'}>
            <FaAngleRight fontSize={25} />
          </Box>
        </Flex>
        <AllFeature />
      </Box>
      <Box px={{ base: '4', lg: '4', xl: '4rem' }}>
        <Movies />
      </Box>
    </Box>
  );
};

export default Popular;

const SliderIcon = {
  position: 'absolute',
  backgroundColor: 'blue',
  h: '100%',
  zIndex: 1,
  pt: 4,
  display: 'none',
};
