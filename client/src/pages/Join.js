// imports
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext.js';

// components
import { Primary } from '../components/Buttons';
import Layout from '../components/Layout.js';

// api requests
import { createNewCommunity, joinCommunity } from '../apiRequests/requests.api.js';

// styles 
import styles from '../styles/Join.module.css';

export default function Join({ isLoggedIn }) {
    const { user } = useUserContext();
    const [title, setTitle] = useState('');
    const [communityKey, setCommunityKey] = useState('');
    const [errorVal, setErrorVal] = useState('');
    const [successVal, setSuccessVal] = useState('');

    // an admin is trying to create a new community
    const handleCreateCommunity = async (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('token');

        // form validations
        if (!title) {
            return setErrorVal('Please enter a title');
        }

        if (!communityKey) {
            return setErrorVal('Please enter a community key');
        }

        // create payload
        const payload = {
            'token': token,
            'title': title,
            'communityKey': communityKey
        };

        // make request
        const data = await createNewCommunity(payload);

        // error validation
        if (data.status === 400) {
            return setErrorVal(data.err);
        }

        // clear any errors and set success message
        setErrorVal('');
        setTitle('');
        setCommunityKey('');
        setSuccessVal(data.message);
    };

    // a user is trying to join a new community
    const handleJoinCommunity = async (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('token');

        // form validations
        if (!communityKey) {
            return setErrorVal('Please enter a community key');
        }

        // create payload
        const payload = {
            'token': token,
            'communityKey': communityKey
        };

        // make request
        const data = await joinCommunity(payload);

        // error validation
        if (data.status === 400) {
            return setErrorVal(data.err);
        }

        if (data.status === 401) {
            return setErrorVal(data.err);
        }


        if (data.status === 404) {
            return setErrorVal(data.err);
        }

        // clear any errors and set success message
        setErrorVal('');
        setCommunityKey('');
        setSuccessVal(data.message);
    };
    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Community'>
            <div className={styles.container}>
                {user.isAdmin ? <h1>Create a new community</h1> : <h1>Join a new community</h1>}
                <div className={styles.form}>
                    {user.isAdmin ?
                        <form onSubmit={handleCreateCommunity}>
                            <input type="text" placeholder="Title of your community" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <input type="text" placeholder="Community key" value={communityKey} onChange={(e) => setCommunityKey(e.target.value)} />
                            <div className={styles.button}>
                                <div className={styles.button}></div>
                                <Primary text={`Submit`} />
                            </div>
                            <div className={styles.errorVal}>{errorVal}</div>
                            <div className={styles.successVal}>
                                {successVal}<br />
                                <p>Head to the{' '}
                                    <span className={styles.link}><a href={`/home/community/`}>community page</a></span> {' '}to check it out!</p>
                            </div>
                        </form>
                        :
                        <form onSubmit={handleJoinCommunity}>
                            <input type="text" placeholder="Enter the community key provided by your blogger..." value={communityKey} onChange={(e) => setCommunityKey(e.target.value)} />
                            <div className={styles.button}>
                                <Primary text={`Submit`} />
                            </div>
                            <div className={styles.errorVal}>{errorVal}</div>
                            <div className={styles.successVal}>{successVal}</div>
                        </form>
                    }
                </div>
            </div>
        </Layout>
    );
}
