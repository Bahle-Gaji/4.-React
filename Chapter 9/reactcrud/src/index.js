import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'bootstrap/dist/css/bootstrap.min.css';


var config = {
  apiKey: "AIzaSyCyVDhNoT6snZDP248Cek_IOdn9jr9X8aA",
  authDomain: "crudproject-2b276.firebaseapp.com",
  projectId: "crudproject-2b276",
  storageBucket: "crudproject-2b276.appspot.com",
  messagingSenderId: "676088182231",
  appId: "1:676088182231:web:97e6108dd4fc1254aa8792",
  measurementId: "G-XLJFTG2VSJ"
};
firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
