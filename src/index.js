import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// import env from './env'
import reducers from './reducers/reducers'

// if (env === 'production') {
//   axios.defaults.baseURL = 'https://server.lawop.com.br'

// } else {
//   axios.defaults.baseURL = 'http://127.0.0.1:3001'
// }

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
