// imports
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCommunityContext } from '../hooks/useCommunityContext.js';

// components 
import Layout from '../components/Layout.js';
import Loading from '../components/Loading.js';

// api requests
import { getCommunity } from '../apiRequests/requests.api.js';

// styles 
import styles from '../styles/Community.module.css';

export default function CommunityPage({ isLoggedIn }) {
    const { community, comDispatch } = useCommunityContext();
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {
        const getCommunityDetails = async () => {
            setIsLoading(true);
            // get communities
            const token = sessionStorage.getItem('token');
            const communities = await getCommunity(token);
            comDispatch({ type: 'GET_COMMUNITY', payload: communities.community });

            //
            setIsLoading(false);
        };

        getCommunityDetails();

    }, []);





    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Community'>
            {community ? community.map(com => {
                return <a key={com.title} href={`/home/community/${com.title}`} > {com.title}</a>;
            }) : <div className={styles.loading_state}>
                <Loading />
            </div>}

        </Layout>
    );
}
