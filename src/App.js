import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth={1630} m={'auto'}>
        <Navbar />
      </Box>
    </ChakraProvider>
  );
}

export default App;
