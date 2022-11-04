import { ColorModeScript, extendTheme, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const colors = {
  nav: {
    light: '#e7e7e764',
    dark: '#55535364',
  },
};

const theme = extendTheme({ colors });
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </BrowserRouter>
);

serviceWorker.unregister();

reportWebVitals();
