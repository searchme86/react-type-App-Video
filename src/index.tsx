import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Views/Assets/Styles/GlobalStyle';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducrer from './Store/Modules/index';

const store = createStore(rootReducrer);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
