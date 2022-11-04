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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
const Searchbox = () => {
  const [text, setText] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClearAll = () => {
    let container = document.querySelector('.clearAll');
    container.innerText = null;
    container.style.display = 'none';
    console.log(container);
    console.log('wor');
  };
  return (
    <>
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
          w={['200px', '400px', '700px']}
          value={text}
          focusBorderColor={'none'}
          onChange={e => setText(e.target.value)}
          //   onClick={onOpen}
        />
      </InputGroup>
      <Box
        position={'absolute'}
        display="none"
        top={'12'}
        boxShadow="dark-lg"
        p="6"
        roundedBottomLeft="2xl"
        roundedBottomRight="2xl"
        bg={useColorModeValue('gray.50', 'gray.900')}
        w={['200px', '400px', '700px']}
        h={400}
        style={{ boxShadow: '1px 15px 11px -8px black' }}
      >
        {/* <ModalOverlay /> */}
        <HStack justifyContent={'space-between'}>
          <Text>Recent searches</Text>
          <Text color={'blue.400'} onClick={() => handleClearAll()}>
            Clear All
          </Text>
        </HStack>
        <Flex mt={5}>
          <Box
            className={'clearAll'}
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
      </Box>
    </>
  );
};
export default Searchbox;
