import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { RequestProvider } from 'react-request-hook';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/`
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RequestProvider value={axiosInstance}>
    <App />
  </RequestProvider>
);

reportWebVitals();
