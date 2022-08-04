// imports
import React from 'react';
import { Navigate } from 'react-router-dom';

// pages
import Home from '../pages/Home';

// styles
import '../styles/loading.css';

export default function Loading({ isLoggedIn }) {

  if (!isLoggedIn) return <Navigate to="/authentication" />;
  return (
    <div className="loading_container">
      <div className='loading'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
