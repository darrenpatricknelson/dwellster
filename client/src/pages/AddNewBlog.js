// imports
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// components
import { Primary } from '../components/Buttons.js';
import Cloud from '../components/Cloud.js';
import Layout from '../components/Layout.js';

// import 
import styles from '../styles/Blogs.module.css';


const AddNewBlog = ({ isLoggedIn }) => {
    const [title, setTitle] = useState('');
    const [textarea, setTextarea] = useState('https://www.lipsum.com/');
    const [errorVal, setErrorVal] = useState('');

    const submitBlog = (e) => {
        e.preventDefault();

        if (title === '') {
            return setErrorVal('Please give you blog a title!');
        }

        if (textarea === '') {
            return setErrorVal("You can't post an empty blog!");
        }
        setErrorVal('');
        console.log(textarea);
        // handle blog submission here
    };


    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Add new Blog'>
            <Cloud>
                <form onSubmit={submitBlog}>
                    <input className={styles.blog_title} type="text" placeholder='What is the title of your blog?' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea className={styles.textarea} placeholder="What are your thoughts?" value={textarea} onChange={(e) => setTextarea(e.target.value)} />
                    <Primary text={`Post your blog`} />
                    <div className={styles.errorVal}><h5>{errorVal}</h5></div>
                </form>
            </Cloud>
        </Layout>
    );
};

export default AddNewBlog;