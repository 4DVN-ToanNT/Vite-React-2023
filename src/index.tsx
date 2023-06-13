import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './brand/pages/home/index';
import './design/styles/base.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
