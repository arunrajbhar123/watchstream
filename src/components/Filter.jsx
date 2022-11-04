import { Box, Text, Flex } from '@chakra-ui/react';
import { HiFilter } from 'react-icons/hi';
import Filtericons from './Filtericons';
const Filter = () => {
  return (
    <Box>
      WATCH NOW
      <Flex bg="red" p="4" cursor="pointer" gap={5}>
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
  webkitTransform: 'rotate(180deg)',
  mozTransform: 'rotate(180deg)',
  oTransform: 'rotate(180deg)',
  msTransform: 'rotate(180deg)',
  transform: 'rotate(180deg)',
};
