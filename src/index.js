import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css" 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7QtinfmBHsP4XKC2RFXmWzzsf0VvIP7M",
  authDomain: "proyecto-react-110c9.firebaseapp.com",
  projectId: "proyecto-react-110c9",
  storageBucket: "proyecto-react-110c9.appspot.com",
  messagingSenderId: "1057101775997",
  appId: "1:1057101775997:web:1cbe0302f1199ecd3c5d14"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

