// imports
import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useCommunityContext } from '../hooks/useCommunityContext.js';
import { useUserContext } from '../hooks/useUserContext.js';

// components 
import { Primary } from '../components/Buttons.js';
import Layout from '../components/Layout.js';

// api requests
import { getCommunity } from '../apiRequests/requests.api.js';

// styles 
import styles from '../styles/Community.module.css';

export default function CommunityPage({ isLoggedIn }) {
    const { communityTitle } = useParams();
    const { user } = useUserContext();
    const { community, comDispatch } = useCommunityContext();



    useEffect(() => {
        const getCommunityDetails = async () => {
            // get communities
            const communities = await getCommunity(communityTitle);
            // console.log(communities.community[0].communityKey);
            sessionStorage.setItem('communityKey', communities.community[0].communityKey);

            comDispatch({ type: 'GET_COMMUNITY', payload: communities.community[0] });

        };

        getCommunityDetails();

    }, []);

    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Community'>
            <div className={styles.button_AddBlog}>
                <a href={`/home/community/add/${communityTitle}`}>
                    <Primary text='What are you thinking at the moment? Create a new Blog post here!' />
                </a>
            </div>
            <div className={styles.clear_Float}>
                {!community || community.blogs.length === 0 ? <h3>There are currently no available blogs in this community</h3> : <h1>There are blogs!</h1>}
                {!user.isAdmin ? <p>Wait for your community admin to post their first blog</p> : <p>You are the admin, your community is waiting for your first blog post!</p>}
            </div>

        </Layout>
    );
}
