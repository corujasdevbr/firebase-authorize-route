import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import {FirebaseAppProvider} from 'reactfire';

import App from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import firebaseConfig from './utils/firebaseConfig'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
