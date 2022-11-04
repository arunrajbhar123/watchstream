import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import AllFeature from './../components/AllFeature';
import ListOfProvider from './../components/ListOfProvider';
import icon from '../asset/icon.webp';
import Movies from './../components/Movies';
import styles from '../components/styles/scrollhide.module.css';
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleRight,
  FaAngleLeft,
} from 'react-icons/fa';
const Popular = () => {
  var maphere = new Array(52).fill(icon);
  const [show, setShow] = useState(true);

  return (
    <Box pt="4rem" w="91%" m="auto">
      <Flex justify="space-between">
        <Text fontSize={'25'}>Welcome to JustWatch Australia</Text>
        {show ? (
          <FaAngleDown onClick={() => setShow(false)} />
        ) : (
          <FaAngleUp onClick={() => setShow(true)} />
        )}
      </Flex>

      <Box h={show ? '65px' : 'auto'} overflow="hidden" mb="25px">
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

      <Flex position={'relative'} alignItems="center">
        <Box {...SliderIcon}>
          <FaAngleLeft fontSize={25} />
        </Box>
        <Flex
          gap={2}
          style={ScrollHidden}
          className={styles.hideScrollbasr}
          // boxShadow={show ? '2px -11px 28px 1px black' : '1px'}
          position="relative"
          p="8px 0"
        >
          {maphere?.map((el, index) => (
            <ListOfProvider key={index} icon={el} />
          ))}
        </Flex>
        <Box {...SliderIcon} right={0}>
          <FaAngleRight fontSize={25} />
        </Box>
      </Flex>

      <AllFeature />
      <Movies />
    </Box>
  );
};

export default Popular;

const ScrollHidden = {
  overflow: 'scroll',
  msoverflowstyle: 'none',
  scrollbarwidth: 'none',
};

const SliderIcon = {
  position: 'absolute',
  backgroundColor: 'blue',
  h: '100%',
  zIndex: 1,
  pt: 4,
};
