// imports
import React from 'react';
import { Navigate } from 'react-router-dom';
// components 
import Community from '../components/Community.js';
import Layout from '../components/Layout.js';

// styles 
import styles from '../styles/Community.module.css';

export default function CommunityPage({ isLoggedIn }) {
    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Community'>
            <Community />
        </Layout>
    );
}
