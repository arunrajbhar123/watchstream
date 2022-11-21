import { Text, Flex, Button } from '@chakra-ui/react';
import { FaBookmark, FaCheck } from 'react-icons/fa';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
const Poster = () => {
  const handleAction = e => {
    e.target.style.color = 'red';
  };
  return (
    <Flex
      justifyContent="space-between"
      bg="var(--ion-color-secondary-shade)"
      color="var(--ion-color-secondary-shade-text)"
      roundedBottomLeft={5}
      roundedBottomRight={5}
    >
      <Flex onClick={handleAction} {...IconStyle}>
        <FaBookmark />
        <Text>Tracking</Text>
      </Flex>
      <Flex onClick={handleAction} {...IconStyle}>
        <FaCheck />
        <Text>Seen All</Text>
      </Flex>
      <Flex onClick={handleAction} {...IconStyle}>
        <HiThumbUp />
        <Text>Like</Text>
      </Flex>
      <Flex {...IconStyle} onClick={handleAction}>
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
