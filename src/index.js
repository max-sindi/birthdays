import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

import { Provider } from 'react-redux';
import store from './redux/store';

import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App>
          <Routes />
        </App>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
