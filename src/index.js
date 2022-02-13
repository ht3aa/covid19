import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./redux/app/store"
import mapboxgl from 'mapbox-gl'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


const firebaseConfig = {
  apiKey: "AIzaSyDP__kF6F_sWBAS8NAVk5t4o1oblPaHfoc",
  authDomain: "covid19-vaccine-fd8d7.firebaseapp.com",
  projectId: "covid19-vaccine-fd8d7",
  storageBucket: "covid19-vaccine-fd8d7.appspot.com",
  messagingSenderId: "934452842905",
  appId: "1:934452842905:web:20abfcf8522924ec8e4308",
  measurementId: "G-NGM0W3DP8X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
