import { ReactNode, useContext } from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher.js';
import Footer from './Footer';
import { Logo } from './Footer';

import { FaUserCog } from 'react-icons/fa';
import Searchbox from './Searchbox';
import MainRoute from './../pages/MainRoute';
import { Link } from 'react-router-dom';
import { MovieContext } from './../context api/ContextProvider';
import useCountry from './../Axios/useCountry';

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
  const { country } = useContext(MovieContext);
  // const loadfirst=useCountry()
  const Links = [
    { text: 'Home', link: '' },
    { text: 'New', link: 'new' },
    { text: 'Popular', link: country },
    { text: 'WatchList', link: 'watchlist' },
  ];
  return (
    <>
      <Box
        px={{ base: '4', lg: '4', xl: '4.7rem' }}
        position={'fixed'}
        w={'100%'}
        backdropFilter="auto"
        backdropBlur="14px"
        // maxWidth={1630}
        zIndex="200"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ base: 'none', md: 'block', xl: 'none' }}
            bg={'none'}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Logo />
            </Box>
            <Flex display={{ base: 'none', md: 'none', xl: 'flex' }}>
              <HStack as={'nav'} spacing={4}>
                {Links.map((el, index) => (
                  <NavLink key={index} {...el} />
                ))}
              </HStack>
              <Box w="100%">
                <Searchbox />
              </Box>
            </Flex>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher />

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
          <Box w="100%">
            <Searchbox />
          </Box>
        </Flex>
      </Box>

      <Box pt={0}>
        <MainRoute />
        {/* <Footer /> */}
      </Box>
    </>
  );
}
