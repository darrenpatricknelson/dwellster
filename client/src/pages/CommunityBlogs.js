// imports
import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useCommunityContext } from '../hooks/useCommunityContext.js';
import { useUserContext } from '../hooks/useUserContext.js';

// bootstrap components
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// components 
import { Card } from '../components/Blogs.js';
import { Primary, Warning } from '../components/Buttons.js';
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

    if (community) {
        var { blogs } = community;
    }

    const deleteBlog = (e, id) => {
        e.preventDefault();
        console.log(id);
    };


    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Community'>
            {user.isAdmin &&
                <div className={styles.button_AddBlog}>
                    <a href={`/home/community/add/${communityTitle}`}>
                        <Primary text='What are you thinking at the moment? Create a new Blog post here!' />
                    </a>
                </div>}

            <div className={styles.clear_Float}>
                {!community || community.blogs.length === 0 ? <h3>There are currently no available blogs in this community</h3> :

                    <Container>
                        <Row>
                            {blogs.map((blog) => {
                                const button = <Warning onClick={(e) => {
                                    deleteBlog(e, blog._id);
                                }} text='Delete' />;
                                return (
                                    <Col sm={12} md={6} lg={4} xl={3} >
                                        <Card isAdmin={user.isAdmin} key={blog._id} blog={blog.blog} button={button} />
                                    </Col>
                                );

                            })}
                        </Row>
                    </Container>


                }
            </div>

        </Layout>
    );
}
