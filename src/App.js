import React from 'react';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { ColorModeProvider } from './theme/ThemeContext';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import store from './store/store';

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
