import { CssBaseline } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import store from './store/store';
import { ColorModeProvider } from './theme/ThemeContext';

const App = () => (
  <Provider store={store}>
    <ColorModeProvider>
      <CssBaseline />
      <Header />
      <Layout />
      <Footer />
    </ColorModeProvider>
  </Provider>
);

export default App;
