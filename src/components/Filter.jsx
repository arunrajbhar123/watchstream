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
const Filter = ({ movieProvider }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Box>
        <Flex gap={5} alignItems="center">
          <Text style={TextOritation} p="15px 0">
            STREAM
          </Text>
          <Filtericons />
        </Flex>
      </Box>
      <Box>
        <Flex gap={5} alignItems="center">
          <Text style={TextOritation} p="15px 0">
            BUY
          </Text>
          <Filtericons />
        </Flex>
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
