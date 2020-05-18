import React from 'react';
import './config/reactotronConfig';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import store from './store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
