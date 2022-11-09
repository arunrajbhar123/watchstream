import React, { useContext } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import { MovieContext } from './context api/ContextProvider';

function App() {
  const {
    overlay,
    handleOverlay,

    handleMultiOverlay,
    multiOverlay,
  } = useContext(MovieContext);
  console.log(multiOverlay);
  return (
    <ChakraProvider theme={theme}>
      <Box
        w="100%"
        h="100vh"
        bg="rgba(0,0,0,0.5)"
        position="fixed"
        zIndex="160"
        onClick={() => {
          if (overlay) {
            handleOverlay(false);
          }
        }}
        display={overlay ? 'block' : 'none'}
      ></Box>
      <Box
        w="100%"
        h="100vh"
        bg="rgba(0,0,0,0.2)"
        position="fixed"
        zIndex="100"
        onClick={() => {
          if (
            multiOverlay.rating ||
            multiOverlay.year ||
            multiOverlay.popContent
          ) {
            handleMultiOverlay({
              rating: false,
              year: false,
              popContent: false,
            });
          }
        }}
        display={
          multiOverlay.rating || multiOverlay.year || multiOverlay.popContent
            ? 'block'
            : 'none'
        }
      ></Box>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
