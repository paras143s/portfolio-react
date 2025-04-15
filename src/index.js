import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import setupNavbar  from './utils/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Setup navbar after initial render
document.addEventListener('DOMContentLoaded', setupNavbar);