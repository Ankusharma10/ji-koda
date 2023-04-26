import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Box>
      <Home/>
    </Box>
    </BrowserRouter>
  );
}

export default App;
