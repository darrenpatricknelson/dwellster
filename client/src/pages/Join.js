// imports
import React from 'react';
import { Navigate } from 'react-router-dom';

// components
import { Primary } from '../components/Buttons';
import Layout from '../components/Layout.js';

// styles 
import styles from '../styles/Join.module.css';

export default function Join({ isLoggedIn }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submit');
    };
    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Community'>
            <div className={styles.container}>
                <h1>Join a new community</h1>
                <div className={styles.form}>
                    <form>
                        <input type="text" placeholder="Enter the community key provided by your blogger..." />
                        <div className={styles.button}>
                            <Primary onClick={handleSubmit} text={`Submit`} />
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
