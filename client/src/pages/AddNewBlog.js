// imports
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// components
import { Primary } from '../components/Buttons.js';
import Cloud from '../components/Cloud.js';
import Layout from '../components/Layout.js';

// api requests
import { addNewBlog } from '../apiRequests/requests.api.js';

// import 
import styles from '../styles/Blogs.module.css';


const AddNewBlog = ({ isLoggedIn }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('https://www.lipsum.com/');
    const [errorVal, setErrorVal] = useState('');

    const submitBlog = (e) => {
        e.preventDefault();

        if (!title) {
            return setErrorVal('Please give you blog a title!');
        }

        if (!description) {
            return setErrorVal("You can't post an empty blog!");
        }
        // clear errors
        setErrorVal('');

        // gather data for api request
        const token = sessionStorage.getItem('token');


        const payload = {
            token,
            title,
            description
            // communityKey
        };

        // handle blog submission here
        console.log(payload);
    };


    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Add new Blog'>
            <Cloud>
                <form onSubmit={submitBlog}>
                    <input className={styles.blog_title} type="text" placeholder='What is the title of your blog?' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea className={styles.textarea} placeholder="What are your thoughts?" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <Primary text={`Post your blog`} />
                    <div className={styles.errorVal}><h5>{errorVal}</h5></div>
                </form>
            </Cloud>
        </Layout>
    );
};

export default AddNewBlog;