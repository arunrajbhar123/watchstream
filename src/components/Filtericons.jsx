import React from 'react';
import { Box, Image, Text, Badge } from '@chakra-ui/react';
import icon from '../asset/icon.webp';
const Filtericons = () => {
  return (
    <Box>
      <Image src={icon} alt="icon" rounded="10" w="12" />
      <Text fontSize="10" pt="2"
      
      >
        2 Season <Badge>HD</Badge>
      </Text>
    </Box>
  );
};

export default Filtericons;
