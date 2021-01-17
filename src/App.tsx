import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

import Routes from './routes';

import { AuthProvider } from './hooks';

import GlobalStyle from './styles/Global';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  </BrowserRouter>
);

export default App;
