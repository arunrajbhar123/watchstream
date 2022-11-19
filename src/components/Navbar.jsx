import { ReactNode, useContext, useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Image,
  InputRightElement,
  VStack,
  Grid,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher.js';

import { Logo } from './Footer';

import { FaUserCog } from 'react-icons/fa';
import { Searchbox, InputComponents } from './Searchbox';
import MainRoute from './../pages/MainRoute';
import { Link } from 'react-router-dom';
import { MovieContext } from './../context api/ContextProvider';

const NavLink = ({ text, link }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={`/${link}`}
    // display={text === 'Home' ? { md: 'none' } : null}
  >
    {text !== 'Home' && text !== 'WatchList' ? text : null}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { country, handleOverlay, overlay } = useContext(MovieContext);

  const searchIcon = useDisclosure();
  const Links = [
    { text: 'Home', link: '' },
    { text: 'New', link: 'new' },
    { text: 'Popular', link: country },
    { text: 'WatchList', link: 'watchlist' },
  ];
  useEffect(() => {
    if (!overlay) {
      searchIcon.onClose();
    }
  }, [overlay]);

  return (
    <>
      <Box
        px={{ base: '4', lg: '4', xl: '4.7rem' }}
        position={'fixed'}
        w={'100%'}
        backdropFilter="auto"
        backdropBlur="14px"
        zIndex="160"
        bg="var(--body-color)"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ base: 'none', md: 'block', xl: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="none"
            _hover={{
              bg: 'none',
            }}
          />
          <Flex spacing={8} alignItems={'center'}>
            <Box>
              <Logo />
            </Box>
            <Flex
              display={{ base: 'none', md: 'none', xl: 'flex' }}
              justifyContent="space-between"
            >
              <HStack as={'nav'} spacing={4}>
                {Links.map((el, index) => (
                  <NavLink key={index} {...el} />
                ))}
              </HStack>
              <Box w="60rem">
                <Searchbox />
              </Box>
            </Flex>
          </Flex>
          <Flex alignItems={'center'}>
            
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <FaUserCog />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(el => (
                <NavLink key={el} {...el} />
              ))}
            </Stack>
          </Box>
        ) : null}
        <Flex
          alignItems="center"
          pb={'2'}
          display={{
            base: 'flex',
            md: 'flex',
            xl: 'none',
          }}
          justify="space-between"
          gap={4}
        >
          <HStack as={'nav'}>
            {Links.map((el, index) => (
              <NavLink key={index} {...el} />
            ))}
          </HStack>

          <Box w="100%" display={['none', 'block', 'block']}>
            <Searchbox />
          </Box>
          <Box
            w="100%"
            display={['block', 'none', 'none']}
            onClick={searchIcon.onOpen}
          >
            <Box position="relative">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />

                <Input
                  type="text"
                  bg="var(--ion-color-search-shade)"
                  border="none"
                  outline="none"
                  placeholder="Search for movies or TV shows "
                  focusBorderColor={'none'}
                  onClick={e => {
                    setTimeout(() => {
                      handleOverlay(true);
                    }, 10);
                  }}
                />
              </InputGroup>
            </Box>
            <BasicUsage searchIcon={searchIcon} />
          </Box>
        </Flex>
      </Box>

      <Box pt={0}>
        <MainRoute />
      </Box>
    </>
  );
}

function BasicUsage({ searchIcon }) {
  return (
    <Box>
      <Modal isOpen={searchIcon.isOpen} onClose={searchIcon.onClose}>
        <ModalOverlay />
        <ModalContent mx="3">
          <Searchbox />
        </ModalContent>
      </Modal>
    </Box>
  );
}
