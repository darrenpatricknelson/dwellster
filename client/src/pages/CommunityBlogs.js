// imports
import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useCommunityContext } from '../hooks/useCommunityContext.js';

// components 
import Layout from '../components/Layout.js';

// api requests
import { getCommunity } from '../apiRequests/requests.api.js';

// styles 
import styles from '../styles/Community.module.css';

export default function CommunityPage({ isLoggedIn }) {
    const { title } = useParams();
    const { community, comDispatch } = useCommunityContext();



    useEffect(() => {
        const getCommunityDetails = async () => {
            // get communities
            const communities = await getCommunity(title);

            // console.log(communities.community[0]);
            comDispatch({ type: 'GET_COMMUNITY', payload: communities.community[0] });

        };

        getCommunityDetails();

    }, []);





    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Community'>
            {/* display the cards  */}
        </Layout>
    );
}
