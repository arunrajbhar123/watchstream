import React, { useContext, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { MovieContext } from './context api/ContextProvider';
import './root.css';
import useUserLocation from './api call/useUserLocation';
import { saveData } from './utils/localStorage';
function App() {
  const { overlay, handleOverlay, handleMultiOverlay, multiOverlay } =
    useContext(MovieContext);
  const run = useUserLocation();
  useEffect(() => {
    saveData('chakra-ui-color-mode', 'dark');
  }, []);

  return (
    <Box
      bg="var(--body-color)"
      fontFamily="Lato,Lato-fallback,Arial,sans-serif"
      fontSize="14"
    >
      <Box
        w="100%"
        top="0"
        h="100vh"
        position="fixed"
        bg={
          overlay ||
          multiOverlay.rating ||
          multiOverlay.year ||
          multiOverlay.popContent
            ? 'rgba(0,0,0,0.5)'
            : null
        }
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
