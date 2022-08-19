// imports
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCommunityContext } from '../hooks/useCommunityContext.js';

// components 
import Layout from '../components/Layout.js';
import Loading from '../components/Loading.js';

// api requests
import { getCommunities } from '../apiRequests/requests.api.js';

// styles 
import styles from '../styles/Community.module.css';

export default function CommunityPage({ isLoggedIn }) {
    const { community, comDispatch } = useCommunityContext();
    const [isLoading, setIsLoading] = useState(false);
    const [noCommunity, setNoCommunity] = useState(null);

    useEffect(() => {
        const getCommunityDetails = async () => {
            setNoCommunity(null);
            setIsLoading(true);

            // clear any communityKeys in the storage
            sessionStorage.removeItem('communityKey');

            // get communities
            const token = sessionStorage.getItem('token');
            const communities = await getCommunities(token);
            console.log(communities);
            // handle errors
            if (communities.status === 404) {
                setIsLoading(false);
                setNoCommunity(communities.message);
                return console.error(communities.err);
            }

            if (!communities.isAdmin) {
                comDispatch({ type: 'GET_COMMUNITY', payload: communities.communities });
                setNoCommunity(null);
                setIsLoading(false);
                return;
            }
            comDispatch({ type: 'GET_COMMUNITY', payload: communities.community });
            setNoCommunity(null);
            setIsLoading(false);

        };

        getCommunityDetails();

    }, []);

    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Community'>


            {community ? community.map(com => {
                // I'm actually lazy and didn't want to style the bullets here 
                return <ul><a key={com.title} href={`/home/community/${com.title}`} > {com.title}</a></ul>;
            }) : isLoading &&
            <div className={styles.loading_state}>
                <Loading />
            </div>}
            {noCommunity &&
                <div>
                    <p>{noCommunity}</p>
                    <p>Find a new community -&gt; <a href="/home/join">New community</a> </p>
                </div>}


        </Layout>
    );
}
