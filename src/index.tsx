import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './store';
import { HashRouter } from 'react-router-dom';
import { Global } from './styles/global';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Global />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
