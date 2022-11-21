import { ColorModeScript, extendTheme, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { MovieContextProvider } from './context api/ContextProvider';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const theme = extendTheme({ config, breakpoints });
root.render(
  <BrowserRouter>
    <MovieContextProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </MovieContextProvider>
  </BrowserRouter>
);

serviceWorker.unregister();

reportWebVitals();
