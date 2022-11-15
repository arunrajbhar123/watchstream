import {
  InputGroup,
  InputLeftElement,
  Input,
  useDisclosure,
  Box,
  Text,
  Flex,
  Image,
  useColorModeValue,
  InputRightElement,
  HStack,
  VStack,
  Grid,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { useState, useEffect, useContext } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from './../context api/ContextProvider';
import useSearch from './../api call/useSearch';
import Loader from './Loader';

const Searchbox = () => {
  const [text, setText] = useState('');
  const { overlay, handleOverlay, query, setQuery, EXCTRA_IMG_LINK } =
    useContext(MovieContext);

  const { searchContent } = useSearch(1);

  const navigate = useNavigate();

  const handleClearAll = () => {
    let container = document.querySelector('.clearAll');
    container.style.display = 'none';
  };

  useEffect(
    (delay = 3000) => {
      var id;

      id = setTimeout(function () {
        if (id) {
          clearTimeout(id);
        }

        setQuery(text);
      }, delay);
      return () => clearTimeout(id);
    },

    [text]
  );

  return (
    <Box
      position="relative"
      style={
        overlay
          ? {
              left: '35px',
              top: '-12px',
            }
          : null
      }
    >
      <InputGroup
        bg={useColorModeValue('gray.50', 'gray.900')}
        // w={['18.5rem', '32rem', '40rem', '62rem']}
        style={
          overlay
            ? {
                position: 'absolute',
                right: 30,
                width: '22rem',
              }
            : null
        }
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        {text !== '' ? (
          <InputRightElement
            onClick={() => setText('')}
            children={<CloseIcon color="gray.300" />}
          />
        ) : null}

        <Input
          type="text"
          placeholder="Search for movies or TV shows "
          value={text}
          focusBorderColor={'none'}
          onChange={e => {
            setText(e.target.value);
          }}
          onClick={e => {
            setTimeout(() => {
              handleOverlay(true);
            }, 10);
          }}
        />

        {searchContent?.length === 0 ? (
          <Box
            position={'absolute'}
            display={overlay ? 'block' : 'none'}
            top={'2.5rem'}
            boxShadow="dark-lg"
            p="6"
            roundedBottomLeft="2xl"
            roundedBottomRight="2xl"
            bg={('gray.50', 'gray.900')}
            w="100%"
            h={text !== '' ? '400' : '400'}
            overflow={'hidden'}
          >
            <Text textAlign="center">
              {text === '' ? (
                <>
                  <HStack justifyContent={'space-between'}>
                    <Text>Recent searches</Text>
                    <Text color={'blue.400'} onClick={() => handleClearAll()}>
                      Clear All
                    </Text>
                  </HStack>
                  <Flex mt={5}>
                    <Box
                      className="clearAll"
                      border={'1px solid grey'}
                      rounded={'2xl'}
                      p={2}
                    >
                      <SearchIcon mr={1} />
                      prem ratan dhan payo
                    </Box>
                  </Flex>

                  <Text mt={5}>Recently visited titles</Text>
                  <Flex mt={5}>
                    <Box>
                      <Image
                        rounded={'md'}
                        w={120}
                        h={150}
                        src={
                          'https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg'
                        }
                        alt={'photo'}
                      />
                    </Box>
                  </Flex>
                </>
              ) : (
                <Box mt="55">
                  <Loader />
                </Box>
              )}
            </Text>
          </Box>
        ) : (
          <Box
            position={'absolute'}
            display={overlay ? 'block' : 'none'}
            top={'2.5rem'}
            boxShadow="dark-lg"
            p="6"
            roundedBottomLeft="2xl"
            roundedBottomRight="2xl"
            bg={('gray.50', 'gray.900')}
            w="100%"
            h={text !== '' ? '500' : '400'}
            overflow={'hidden'}
          >
            <>
              <Grid
                gap={8}
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(1, 1fr)',
                  lg: 'repeat(2, 1fr)',
                  xl: 'repeat(2, 1fr)',
                }}
              >
                <Box w="100%">
                  <Text pb={2}>Movies</Text>
                  <hr style={{ height: '15px' }} />
                  <VStack>
                    {searchContent?.map((el, index) => (
                      <>
                        {index <= 3 ? (
                          <Flex
                            key={index}
                            w="100%"
                            _hover={{
                              bg: 'pink',
                              cursor: 'pointer',
                            }}
                            rounded={5}
                            p="1"
                            gap={5}
                            alignItems="center"
                            onClick={() => {
                              navigate(`/au/${el.title}/${el?.id}`);
                              handleOverlay(false);
                            }}
                          >
                            <Box w="3rem">
                              <Image
                                rounded={5}
                                src={EXCTRA_IMG_LINK + el.poster_path}
                                alt={`${
                                  el.original_title?.split(' ')[0]
                                }_poster`}
                              />
                            </Box>
                            <Box>
                              <Text fontSize={20}>{el.title}</Text>
                              <Text>{el?.release_date?.split('-')[0]}</Text>
                            </Box>
                          </Flex>
                        ) : null}
                      </>
                    ))}
                  </VStack>
                </Box>

                <Box w="100%">
                  <Text pb={2}>Movies</Text>
                  <hr style={{ height: '15px' }} />
                  <VStack>
                    {searchContent?.map((el, index) => (
                      <>
                        {index <= 3 ? (
                          <Flex
                            key={index}
                            w="100%"
                            _hover={{
                              bg: 'pink',
                              cursor: 'pointer',
                            }}
                            rounded={5}
                            p="1"
                            gap={5}
                            alignItems="center"
                            onClick={() => {
                              navigate(`/au/${el.title}/${el?.id}`);
                              handleOverlay(false);
                            }}
                          >
                            <Box w="3rem">
                              <Image
                                rounded={5}
                                src={EXCTRA_IMG_LINK + el.poster_path}
                                alt={`${
                                  el.original_title.split(' ')[0]
                                }_poster`}
                              />
                            </Box>
                            <Box>
                              <Text fontSize={20}>{el.title}</Text>
                              <Text>{el.release_date?.split('-')[0]}</Text>
                            </Box>
                          </Flex>
                        ) : null}
                      </>
                    ))}
                  </VStack>
                </Box>
              </Grid>
            </>

            {text !== '' ? (
              <>
                {' '}
                <Box p="15px 0">
                  <hr />
                </Box>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  p={1}
                  onClick={() => navigate(`/query/${query}`)}
                >
                  <Text> See all results for a </Text>
                  <FaAngleDoubleRight />
                </Flex>
              </>
            ) : null}
          </Box>
        )}
      </InputGroup>
    </Box>
  );
};
export default Searchbox;
