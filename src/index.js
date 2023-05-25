import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './styles/index.css';
import './styles/reset.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/elifTech-test">
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
