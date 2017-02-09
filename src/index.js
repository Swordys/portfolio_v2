import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App.jsx';
import styles from './styles/base.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App styles={styles} />
  </Provider>,
  document.getElementById('app')
);
