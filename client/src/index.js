import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CommunityContextProvider } from './context/Community.context.js';
import { UserContextProvider } from './context/User.context.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CommunityContextProvider>
        <App />
      </CommunityContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);