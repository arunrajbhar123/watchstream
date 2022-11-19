import React, { useContext } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { MovieContext } from './context api/ContextProvider';
import './root.css';
function App() {
  const { overlay, handleOverlay, handleMultiOverlay, multiOverlay } =
    useContext(MovieContext);

  return (
    <Box
      bg="var(--body-color)"
      fontFamily="Lato,Lato-fallback,Arial,sans-serif"
      fontSize="14"
    >
      <Box
        w="100%"
        h="100vh"
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
    </Box>
  );
}

export default App;
