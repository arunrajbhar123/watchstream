import {
  Image,
  Flex,
  useDisclosure,
  ScaleFade,
  Box,
  Text,
} from '@chakra-ui/react';
import styles from './styles/scrollhide.module.css';
import StyleSe from './styles/unselectabletext.module.css';
import { useState, useRef, useContext, useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from './../context api/ContextProvider';


export const Slider = ({
  data,
  w = '11.5rem',
  setIsLoaderToggle,
  title,
  len,
  keyposter,
  scroll = 4,
  radius = '5',
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
      {title !== undefined ? (
        <Text
          className={StyleSe.unselectable}
          py="3"
          color="var(--ion-color-secondary)"
          fontSize="17"
        >
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
                <Image
                  key={index}
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
                      if (el?.media_type === 'tv' || true) {
                        content = 'tv-show';
                      } else if (el?.media_type === 'movie') {
                        content = 'movies';
                      }

                      if (content) {
                        navigate(
                          `/${country?.country_code?.toLowerCase()}/${
                            content || ''
                          }/${routeNew}/${el?.id}`
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
