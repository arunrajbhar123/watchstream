import {
  Image,
  Flex,
  useDisclosure,
  ScaleFade,
  Box,
  Text,
  Grid,
} from '@chakra-ui/react';
import styles from './styles/scrollhide.module.css';
import StyleSe from './styles/unselectabletext.module.css';
import { useState, useRef, useContext, useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from './../context api/ContextProvider';
import { Fragment } from 'react';
export const Slider = ({
  data,
  w = '11.5rem',
  setIsLoaderToggle,
  title,
  len,
  keyposter,
  scroll = 4,
  radius = '5',
  cast = false,
  seasons = false,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputImg = useRef([]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { EXCTRA_IMG_LINK, country, handleOverlay } = useContext(MovieContext);
  useEffect(() => {
    if (currentIndex !== 0) {
      inputImg?.current[currentIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex]);

  return (
    <Box py="2">
      {title !== undefined && data?.length !== 0 ? (
        <Text className={StyleSe.unselectable} py="3" fontSize="17">
          PEOPLE WHO LIKED {title} ALSO LIKED
        </Text>
      ) : null}

      <Flex position="relative" onMouseEnter={onToggle} onMouseLeave={onToggle}>
        {data?.length > len ? (
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Box display={currentIndex === 0 ? 'none' : 'block'}>
              <Flex
                display={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                {...SliderIcon}
                _hover={{
                  color: 'var( --slider-bg-color-arrow-hover)',
                }}
                onClick={() => {
                  if (currentIndex !== 0) {
                    setCurrentIndex(currentIndex - scroll);
                  }
                }}
              >
                <FaAngleLeft />
              </Flex>
            </Box>
          </ScaleFade>
        ) : null}

        <Flex gap={2} className={styles.hideScrollbasr} pr="5">
          {data?.map((el, index) => {
            if (el[keyposter] !== null) {
              return (
                <Fragment  key={index}>
                  {cast ? (
                    // <CastSlider {...el} inputImg={inputImg} index={index} />

                    <></>
                  ) : (
                    <>
                      {seasons ? (
                        // EXCTRA_IMG_LINK + el[keyposter] radius inputImg index el,keyposter,w,navigate,country,setIsLoaderToggle,handleOverlay

                        <SeasonsImage
                          setIsLoaderToggle={setIsLoaderToggle}
                          handleOverlay={handleOverlay}
                          country={country}
                          navigate={navigate}
                          w={w}
                          el={el}
                          index={index}
                          url={EXCTRA_IMG_LINK + el[keyposter]}
                          radius={radius}
                          inputImg={inputImg}
                        />
                      ) : (
                        <Image
                          draggable="false"
                          cursor="pointer"
                          ref={element => {
                            inputImg.current[index] = element;
                          }}
                          w={w}
                          rounded={radius}
                          src={EXCTRA_IMG_LINK + el[keyposter]}
                          onClick={() => {
                            if (keyposter !== 'logo_path') {
                              let routeNew;
                              if (el?.title) {
                                routeNew = el.title;
                              } else {
                                routeNew = el.name;
                              }
                              var content;
                              if (el?.media_type === 'tv') {
                                content = 'tv-show';
                              } else if (el?.media_type === 'movie') {
                                content = 'movies';
                              }

                              if (content) {
                                navigate(
                                  `/${country?.country_code?.toLowerCase()}/${content}/${routeNew}/${
                                    el?.id
                                  }`
                                );
                              } else {
                                navigate(
                                  `/${country?.country_code?.toLowerCase()}/${routeNew}/${
                                    el?.id
                                  }`
                                );
                              }
                            }

                            setIsLoaderToggle(true);
                            document.body.scrollTop = 0;
                            document.documentElement.scrollTop = 0;
                            handleOverlay(false);
                          }}
                        />
                      )}
                    </>
                  )}
                </Fragment>
              );
            }
          })}
        </Flex>

        {data?.length > len ? (
          <ScaleFade in={isOpen}>
            <Box display={currentIndex === data?.length - 1 ? 'none' : 'block'}>
              <Flex
                display={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                {...SliderIcon}
                _hover={{
                  color: 'var( --slider-bg-color-arrow-hover)',
                }}
                right="0"
                onClick={() => {
                  if (currentIndex <= data?.length - 1) {
                    setCurrentIndex(currentIndex + scroll);
                  }
                }}
              >
                <FaAngleRight />
              </Flex>
            </Box>
          </ScaleFade>
        ) : null}
      </Flex>
    </Box>
  );
};

const SliderIcon = {
  bg: 'var(--slider-bg-color)',
  position: 'absolute',
  padding: '0.6rem',
  h: '100%',
  alignItems: 'center',
  fontSize: '30px',
  cursor: 'pointer',
  color: 'var(--slider-bg-color-arrow)',
};

const CastSlider = ({ name, character, inputImg, index }) => {
  return (
    <Box
      ref={element => {
        inputImg.current[index] = element;
      }}
      rounded="8"
      px="2"
    >
      <Text
        cursor="pointer"
        color="blue.100"
        _hover={{
          color: 'white',
        }}
      >
        {name}
      </Text>
      <Text color="grey">{character}</Text>
    </Box>
  );
};

const SeasonsImage = ({
  url,
  radius,
  inputImg,
  index,
  el,
  keyposter,
  w,
  navigate,
  country,
  setIsLoaderToggle,
  handleOverlay,
}) => {
  return (
    <>
      <Image
        draggable="false"
        cursor="pointer"
        ref={element => {
          inputImg.current[index] = element;
        }}
        rounded={radius}
        src={url}
        w={w}
        onClick={() => {
          if (keyposter !== 'logo_path') {
            let routeNew;
            if (el?.title) {
              routeNew = el.title;
            } else {
              routeNew = el.name;
            }
            var content;
            if (el?.media_type === 'tv') {
              content = 'tv-show';
            } else if (el?.media_type === 'movie') {
              content = 'movies';
            }

            if (content) {
              navigate(
                `/${country?.country_code?.toLowerCase()}/${content}/${routeNew}/${
                  el?.id
                }`
              );
            } else {
              navigate(
                `/${country?.country_code?.toLowerCase()}/${routeNew}/${el?.id}`
              );
            }
          }

          setIsLoaderToggle(true);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          handleOverlay(false);
        }}
      />
      <Box position="relative">
        <Box position="absolute" left="-9.5rem" bottom="0">
          <Text
            w="5rem"
            bg="gray.500"
            roundedTopRight="5"
            px="1"
            roundedBottomRight="5"
          >
            {el?.name}
          </Text>
        </Box>
      </Box>
    </>
  );
};
