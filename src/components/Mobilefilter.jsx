import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Mobilefilter = props => {
  return (
    <Box position="fixed" top="-15em" w="100%" h="100vh" bg="#111" p="5"
    display={{ base: 'block', lg: 'block', xl: 'none', '2xl': 'none' }}
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
