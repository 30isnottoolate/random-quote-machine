import React from 'react';
import ReactDOM from 'react-dom/client';
import RandomQuoteMachine from './RandomQuoteMachine';

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(
  <React.StrictMode>
    <RandomQuoteMachine />
  </React.StrictMode>
);
