import { Text, Flex } from '@chakra-ui/react';
import { FaBookmark, FaCheck } from 'react-icons/fa';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
const Poster = () => {
  return (
    <Flex
      justifyContent="space-between"
      bg="var(--ion-color-secondary-shade)"
      color="var(--ion-color-secondary-shade-text)"
      roundedBottomLeft={5}
      roundedBottomRight={5}
    >
      <Flex {...IconStyle}>
        <FaBookmark />
        <Text>Tracking</Text>
      </Flex>
      <Flex {...IconStyle}>
        <FaCheck />
        <Text>Seen All</Text>
      </Flex>
      <Flex {...IconStyle}>
        <HiThumbUp />
        <Text>Like</Text>
      </Flex>
      <Flex {...IconStyle}>
        <HiThumbDown />
        <Text>Dislike</Text>
      </Flex>
    </Flex>
  );
};
export default Poster;

const IconStyle = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  p: '5',
};
