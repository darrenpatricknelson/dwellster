// imports
import React, { useEffect, useState } from 'react';
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
import { deleteBlog, getCommunity } from '../apiRequests/requests.api.js';

// styles 
// Blogs.css
// Community.css

export default function CommunityPage({ isLoggedIn }) {
    const { communityTitle } = useParams();
    const { user } = useUserContext();
    const { community, comDispatch } = useCommunityContext();
    // states
    const [errorVal, setErrorVal] = useState();
    const [successVal, setSuccessVal] = useState();



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

    const deleteBlogRequest = async (e, blog) => {
        e.preventDefault();


        // construct the variables for the payload
        const token = sessionStorage.getItem('token');
        const communityKey = sessionStorage.getItem('communityKey');

        // create the payload
        const payload = {
            token, communityKey, blog
        };

        // make the request
        const data = await deleteBlog(payload);

        // error validation 
        if (data.status === 400) {
            console.log(data);
            return setErrorVal(data.err);
        }

        // success validation
        setSuccessVal(data.message);
        // remove the success message after 3 seconds
        setTimeout(() => {
            setSuccessVal('');
        }, 3000);

        // update the context 
        comDispatch({ type: 'GET_COMMUNITY', payload: data.community });
        console.log(data);
    };


    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Community'>
            {user.isAdmin &&
                <div className={'community_button_AddBlog'}>
                    <a href={`/home/community/add/${communityTitle}`}>
                        <Primary text='What are you thinking at the moment? Create a new Blog post here!' />
                    </a>
                </div>}

            <div className={'community_clear_Float'}>
                {!community || community.blogs.length === 0 ? <h3>There are currently no available blogs in this community</h3> :

                    <Container>
                        <Row>
                            {blogs.map((blog, idx) => {
                                const button = <Warning onClick={(e) => {
                                    deleteBlogRequest(e, blog);
                                }} text='Delete' />;
                                return (
                                    <Col key={idx} sm={12} md={6} lg={4} xl={3} >
                                        <Card isAdmin={user.isAdmin} key={blog._id} blog={blog.blog} button={button} />
                                    </Col>
                                );

                            })}
                        </Row>
                    </Container>

                }
                <div className={'errorVal'}>{errorVal}</div>
                <div className={'successVal'}>{successVal}</div>

            </div>

        </Layout>
    );
}
