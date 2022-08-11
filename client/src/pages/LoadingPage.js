// imports
import React from 'react';
import { Navigate } from 'react-router-dom';

// components
import Loading from '../components/Loading.js';

export default function LoadingPage({ isLoggedIn }) {

    if (!isLoggedIn) {
        return <Navigate to="/authentication" />;
    } else if (isLoggedIn) {
        return <Navigate to="/home" />;
    }
    return (
        <Loading />
    );
}
