import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import Home from './Pages/Home';

function App() {
  return (
    <Box>
      <ColorModeSwitcher/>
      <Home/>
    </Box>
  );
}

export default App;
