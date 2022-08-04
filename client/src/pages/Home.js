// imports
import React from 'react';
import { Navigate } from 'react-router-dom';


export default function Home({ Component, pageProps, isLoggedIn }) {


    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <h1>Hello world</h1>
    );
}