import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Mobilefilter = props => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  return (
    <Box
      w="90%"
      h="100vh"
      bg="#111"
      top="-12rem"
      p="5"
      display={{ base: 'block', lg: 'block', xl: 'none', '2xl': 'none' }}
      position="fixed"
     
    >
      <Flex justify="space-between">
        <Text>Done</Text>
        <Text color="blue" onClick={props.show}>
          Done
        </Text>
      </Flex>
    </Box>
  );
};

export default Mobilefilter;
