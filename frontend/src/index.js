import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';
import GlobalStateProvider from './context/GlobalStateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </Router>
  </React.StrictMode>
);
