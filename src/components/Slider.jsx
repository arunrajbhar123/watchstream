import { Image, Flex, useDisclosure, ScaleFade, Box } from '@chakra-ui/react';
import styles from './styles/scrollhide.module.css';
import { useState, useRef, useContext } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from './../context api/ContextProvider';
export const Slider = ({ data, w = '10rem' }) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputImg = useRef([]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { EXCTRA_IMG_LINK } = useContext(MovieContext);
  return (
    <Box py="5" w="100%">
      <Flex position="relative" onMouseEnter={onToggle} onMouseLeave={onToggle}>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Flex
            {...SliderIcon}
            onClick={() => {
              if (currentIndex !== 0) {
                setCurrentIndex(currentIndex - 4);
              }
              inputImg.current[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
              });
            }}
          >
            <FaAngleLeft />
          </Flex>
        </ScaleFade>
        <Flex gap={2} className={styles.hideScrollbasr}>
          {data?.map((el, index) => (
            <Image
              key={index}
              cursor="pointer"
              ref={element => {
                inputImg.current[index] = element;
              }}
              w={w}
              rounded={5}
              src={EXCTRA_IMG_LINK + el.poster_path}
              onClick={() => {
                navigate(`/au/${el.title}/${el?.id}`);
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
            />
          ))}
        </Flex>

        <ScaleFade initialScale={0.9} in={isOpen}>
          <Flex
            {...SliderIcon}
            right="0"
            onClick={() => {
              if (currentIndex <= data.length) {
                setCurrentIndex(currentIndex + 4);
              }

              inputImg.current[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
              });
            }}
          >
            <FaAngleRight />
          </Flex>
        </ScaleFade>
      </Flex>
    </Box>
  );
};

const SliderIcon = {
  bg: 'red',
  position: 'absolute',
  h: '100%',
  alignItems: 'center',
  fontSize: '30px',
  cursor: 'pointer',
};
