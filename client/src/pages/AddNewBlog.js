// imports
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

// components
import { Primary } from '../components/Buttons.js';
import Cloud from '../components/Cloud.js';
import Layout from '../components/Layout.js';

// api requests
import { addNewBlog } from '../apiRequests/requests.api.js';

// import 
// Blogs.css


const AddNewBlog = ({ isLoggedIn }) => {
    const { communityTitle } = useParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [successVal, setSuccessVal] = useState('');
    const [errorVal, setErrorVal] = useState('');

    const submitBlog = async (e) => {
        e.preventDefault();

        // validate a title exists
        if (!title) {
            return setErrorVal('Please give you blog a title!');
        }

        // validate a description exists
        if (!description) {
            return setErrorVal("You can't post an empty blog!");
        }

        // clear errors
        setErrorVal('');

        // gather data for api request
        const token = sessionStorage.getItem('token');
        const communityKey = sessionStorage.getItem('communityKey');


        // create the payload
        const payload = {
            token,
            title,
            description,
            communityKey
        };
        console.log(communityKey);

        // call the api request function 
        const data = await addNewBlog(payload);

        //  validation
        if (data.status === 200) {
            setSuccessVal(data.message);
            setDescription('');
            setTitle('');
        }
        // handle response
        console.log(data);
    };


    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Add new Blog'>
            <Cloud>
                <form onSubmit={submitBlog}>
                    <input className={'add_new_blog_title'} type="text" placeholder='What is the title of your blog?' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea className={'add_new_blog_textarea'} placeholder="What are your thoughts?" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <Primary text={`Post your blog`} />
                    <div className={'errorVal'}><h5>{errorVal}</h5></div>
                    {successVal && <div className={'successVal'}>
                        <h5>{successVal}</h5>
                        <p>You can another another blog post or head back to the{' '}
                            <span className={'add_new_blog_link'}><a href={`/home/community/${communityTitle}`}>blogs page</a></span></p>
                    </div>}

                </form>
            </Cloud>
        </Layout>
    );
};

export default AddNewBlog;