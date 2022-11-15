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
import { HiFilter } from 'react-icons/hi';
import Filtericons from './Filtericons';
import { ChevronDownIcon } from '@chakra-ui/icons';
const Filter = ({ movieProvider }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      WATCH NOW
      <Flex
        p="3"
        alignItems="center"
        cursor="pointer"
        justifyContent="space-between"
      >
        <Flex gap={5}>
          <Flex cursor="text" alignItems="center">
            <HiFilter fontSize={19} />
            <Text>Filter</Text>
          </Flex>
          <Text>Best Price</Text>
          <Text>Free</Text>
          <Text>SD</Text>
          <Text>HD</Text>
          <Text>4K</Text>
        </Flex>
        <Flex alignItems="center" onClick={onOpen}>
          <Text>Streaming in :</Text>
          <Button rightIcon={<ChevronDownIcon />}>India</Button>
        </Flex>
      </Flex>
      <Box>
        <Flex gap={5} alignItems="center">
          <Text style={TextOritation} bg="pink" p="15px 0">
            STREAM
          </Text>
          <Filtericons />
        </Flex>
      </Box>
      <Box>
        <Flex gap={5} alignItems="center">
          <Text style={TextOritation} bg="gray" p="15px 0">
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
