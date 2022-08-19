// imports
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext.js';

// components
import Layout from '../components/Layout.js';

// styles 
import styles from '../styles/Home.module.css';


export default function Home({ isLoggedIn }) {
    const { user } = useUserContext();

    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Home'>
            <div className={styles.home_page}>
                <h1>Welcome to Dwellster! A community friendly blog like no other.</h1>
                <p>View your communities -&gt; <a href="/home/community">Community</a> </p>
                {user.isAdmin ?
                    <p>Create a new community -&gt; <a href="/home/join">New community</a> </p>
                    :
                    <p>Find a new community -&gt; <a href="/home/join">New community</a> </p>
                }
            </div>
        </Layout>
    );
}