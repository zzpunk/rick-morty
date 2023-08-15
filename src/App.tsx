import React from 'react';
import AppRoutes from './routes/Routes';
import { MainLayout } from './layouts/MainLayout';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/index.scss';

function App() {
  return (
    <ChakraProvider>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
