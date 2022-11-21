import {
  InputGroup,
  InputLeftElement,
  Input,
  useDisclosure,
  Box,
  Text,
  Flex,
  Image,
  InputRightElement,
  HStack,
  VStack,
  Grid,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { useState, useEffect, useContext, Fragment } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { MovieContext } from './../context api/ContextProvider';
import { useSearch } from './../api call/useSearch';
import Loader from './Loader';
import styles from './styles/scrollhide.module.css';
import { saveData, loadData } from '../utils/localStorage.js';
import { Slider } from './Slider';
export const Searchbox = () => {
  const location = useLocation();
  let currentsetText = '';
  if (location.pathname?.split('/')[1] == 'query') {
    currentsetText = location.pathname?.split('/')[2];
  }
  const [text, setText] = useState(currentsetText);
  const { overlay, handleOverlay, setQuery } = useContext(MovieContext);
  const [recentSearch, setRecentSearh] = useState(
    loadData('recentSearch') || []
  );
  const navigate = useNavigate();

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
    <Box position="relative">
      <InputGroup>
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
          bg="var(--ion-color-search-shade)"
          border="none"
          outline="none"
          onChange={e => {
            setText(e.target.value);
          }}
          onClick={e => {
            setTimeout(() => {
              handleOverlay(true);
            }, 10);
          }}
          onKeyPress={e => {
            if (e.charCode === 13) {
              const NewRecentData = recentSearch?.map(item => item === text);

              if (!NewRecentData[0] && text !== '') {
                recentSearch.push(text);
                saveData('recentSearch', recentSearch);
              }
              navigate(`/query/${text}`);
              handleOverlay(false);
            }
          }}
        />
      </InputGroup>
      <Box display={overlay ? 'block' : 'none'}>
        <InputComponents text={text} setRecentSearh={setRecentSearh} />
      </Box>
    </Box>
  );
};

export const InputComponents = ({ text, setRecentSearh }) => {
  const { searchContent } = useSearch(1);
  const navigate = useNavigate();

  const { overlay, handleOverlay, query, EXCTRA_IMG_LINK, country } =
    useContext(MovieContext);
  const recentSearch = loadData('recentSearch');
  const [recentTitle, setRecentTitle] = useState(loadData('recentTitle') || []);
  return (
    <Box
      bg="var(--ion-color-search-shade)"
      position="absolute"
      w="100%"
      p={['2', '5']}
    >
      {text === '' || searchContent?.length === 0 ? (
        <Box>
          {text === '' ? (
            <Box>
              <HStack justifyContent={'space-between'}>
                <Text color="#797a7b">Recent searches</Text>
                <Text
                  color={'blue.400'}
                  cursor="pointer"
                  onClick={() => {
                    saveData('recentSearch', []);
                    saveData('recentTitle', []);
                    setRecentSearh([]);
                    setRecentTitle([]);
                  }}
                >
                  Clear All
                </Text>
              </HStack>
              <Flex gap="2" className={styles.hideScrollbasr} pt="3">
                {recentSearch?.map((el, index) => (
                  <Flex
                    alignItems="center"
                    key={index}
                    className="clearAll"
                    border={'1px solid grey'}
                    rounded={'7'}
                    px="2"
                    py="1"
                    cursor="pointer"
                    _hover={{
                      color: 'white',
                      border: '1px solid white',
                    }}
                    onClick={() => {
                      navigate(`/query/${el}`);
                      handleOverlay(false);
                    }}
                  >
                    <SearchIcon mr={1} color="grey" />

                    <Text>{el}</Text>
                  </Flex>
                ))}
              </Flex>

              {recentTitle?.length !== 0 ? (
                <>
                  <Text mt={5} textAlign="start" color="#797a7b">
                    Recently visited titles
                  </Text>
                  <Flex mt={5}>
                    <Box>
                      <Slider
                        data={recentTitle}
                        w={['7rem', '10rem']}
                        len={7}
                        keyposter="poster_path"
                      />
                    </Box>
                  </Flex>
                </>
              ) : (
                <TrendingTitle
                  handleOverlay={handleOverlay}
                  navigate={navigate}
                />
              )}
            </Box>
          ) : (
            <Box mt="55">
              <Loader />
            </Box>
          )}
        </Box>
      ) : (
        <Box
          display={overlay ? 'block' : 'none'}
          className={styles.hideScrollbasr}
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
                    <Fragment key={index}>
                      {index <= 3 ? (
                        <Flex
                          w="100%"
                          _hover={{
                            bg: '#1c252f',
                            cursor: 'pointer',
                          }}
                          rounded={5}
                          p="2"
                          gap={5}
                          alignItems="center"
                          onClick={() => {
                            navigate(
                              `/${country?.country_code
                                ?.toLowerCase()
                                .toLowerCase()}/${el.title}/${el?.id}`
                            );
                            handleOverlay(false);
                            const NewRecentData = recentTitle?.map(
                              item => item.id === el.id
                            );

                            if (!NewRecentData[0] && text !== '') {
                              recentTitle.push(el);
                              saveData('recentTitle', recentTitle);
                            }
                          }}
                        >
                          <Box w="3rem">
                            <Image
                              rounded={5}
                              src={EXCTRA_IMG_LINK + el.poster_path}
                              alt={`${el.original_title?.split(' ')[0]}_poster`}
                            />
                          </Box>
                          <Box>
                            <Text fontSize={20}>{el.title}</Text>
                            <Text>{el?.release_date?.split('-')[0]}</Text>
                          </Box>
                        </Flex>
                      ) : null}
                    </Fragment>
                  ))}
                </VStack>
              </Box>

              <Box>
                <Text pb={2}>Movies</Text>
                <hr style={{ height: '15px' }} />
                <VStack>
                  {searchContent?.map((el, index) => (
                    <Fragment key={index}>
                      {index <= 3 ? (
                        <Flex
                          w="100%"
                          _hover={{
                            bg: '#1c252f',
                            cursor: 'pointer',
                          }}
                          rounded={5}
                          p="2"
                          gap={5}
                          alignItems="center"
                          onClick={() => {
                            navigate(
                              `/${country?.country_code
                                ?.toLowerCase()
                                .toLowerCase()}/${el.title}/${el?.id}`
                            );
                            handleOverlay(false);
                          }}
                        >
                          <Box w="3rem">
                            <Image
                              rounded={5}
                              src={EXCTRA_IMG_LINK + el.poster_path}
                              alt={`${el.original_title.split(' ')[0]}_poster`}
                            />
                          </Box>
                          <Box>
                            <Text fontSize={20}>{el.title}</Text>
                            <Text>{el.release_date?.split('-')[0]}</Text>
                          </Box>
                        </Flex>
                      ) : null}
                    </Fragment>
                  ))}
                </VStack>
              </Box>
            </Grid>
          </>

          {text !== '' ? (
            <>
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
    </Box>
  );
};

const TrendingTitle = ({ handleOverlay, navigate }) => {
  const data = [
    'Trending',
    'Trending',
    'Trending',
    'Trending',
    'Trending dkjfnf ',
    'Trending dkjfnf ',
    'Trending dkjfnf ',
    'Trending dkjfnf ',
    'Trending dkjfnf ',
    'Trending dkjfnf ',
    'Trending dkjfnf ',
    'Trending dkjfnf ',
  ];
  return (
    <Box>
      <Text color="#797a7b" pt="5" pb="2">
        Trending sklfnfijnfdkj
      </Text>

      <Wrap>
        {data?.map((el, index) => (
          <WrapItem
            alignItems="center"
            key={index}
            border={'1px solid grey'}
            rounded={'7'}
            px="2"
            py="1"
            cursor="pointer"
            _hover={{
              color: 'white',
              border: '1px solid white',
            }}
            onClick={() => {
              navigate(`/query/${el}`);
              handleOverlay(false);
            }}
          >
            <SearchIcon mr={1} color="grey" />

            <Text>{el}</Text>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
