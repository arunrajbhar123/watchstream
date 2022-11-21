import {
  Box,
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import styles from './styles/unselectabletext.module.css';
import { HiFilter } from 'react-icons/hi';
import Filtericons from './Filtericons';
import { ChevronDownIcon } from '@chakra-ui/icons';
import useWatchProvider from './../api call/useWatchProvider';

const Filter = ({ movieProvider }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { watchProvider } = useWatchProvider(movieProvider);
  // console.log(watchProvider);

  var ProviderBuy = [];
  var ProviderRent = [];
  var ProviderFlatRate = [];
  // flatrate

  for (let key in watchProvider) {
    if (key === 'IN') {
      ProviderBuy = watchProvider?.IN?.buy;
      ProviderRent = watchProvider?.IN?.rent;
      ProviderFlatRate = watchProvider?.IN?.flatrate;
    }
  }

  return (
    <Box>
      <Text
        color="var(--ion-color-secondary-tint)"
        className={styles.unselectable}
      >
        WATCH NOW
      </Text>
      <Flex
        py="3"
        alignItems="center"
        cursor="pointer"
        justifyContent="space-between"
      >
        <Flex
          gap={5}
          alignItems="center"
          color="var(--ion-color-secondary-tint)"
        >
          <Flex cursor="text" alignItems="center">
            <HiFilter fontSize={19} />
            <Text>Filter</Text>
          </Flex>
          <Text color="white">Best Price</Text>
          <Text>Free</Text>
          <Text>SD</Text>
          <Text>HD</Text>
          <Text>4K</Text>
        </Flex>
        <Flex alignItems="center" onClick={onOpen}>
          <Text
            display={{ base: 'none', md: 'none', lg: 'block', xl: 'block' }}
            color="var(--ion-color-secondary-tint)"
          >
            Streaming in :
          </Text>
          <Button size={'sm'} rightIcon={<ChevronDownIcon />}>
            India
          </Button>
        </Flex>
      </Flex>
      {ProviderFlatRate?.length > 0 ? (
        <Box>
          <Flex gap={5} alignItems="center">
            <Text style={TextOritation} p="15px 0" 
            bg="#d4d1d1"
            >
              STREAM
            </Text>
            <Filtericons data={ProviderFlatRate} />
          </Flex>
        </Box>
      ) : null}
      <Box>
        {ProviderBuy?.length > 0 ? (
          <Flex gap={5} alignItems="center">
            <Text style={TextOritation} p="15px 0"
            bg="#a3a1a1"
            >
              BUY
            </Text>
            <Filtericons data={ProviderBuy} />
          </Flex>
        ) : null}
      </Box>
      <Box>
        {ProviderRent?.length > 0 ? (
          <Flex gap={5} alignItems="center">
            <Text 
            bg="grey"
            style={TextOritation} p="15px 0">
              RENT
            </Text>
            <Filtericons data={ProviderRent} />
          </Flex>
        ) : null}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0,0,0,0.5)" />
        <ModalContent>
          <ModalHeader>Country</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>India</Text>
            <Box>
              {/* {movieProvider.results.map((el)=>(
                <Text>{el}</Text>
              ))} */}
            </Box>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default Filter;

const TextOritation = {
  writingMode: 'vertical-lr',
  textOrientation: 'use-glyph',
  height: '7rem',
  textAlign: 'center',
  writingMmode: 'tb-rl',
  WebkitTransform: 'rotate(180deg)',
};
