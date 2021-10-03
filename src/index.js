import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './media/styles/index.scss';
import App from './App';
import store, { persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);