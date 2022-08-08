// imports
import React from 'react';
import { Navigate } from 'react-router-dom';

// components
import Cloud from '../components/Cloud.js';
import Layout from '../components/Layout.js';

const AddNewBlog = ({ isLoggedIn }) => {


    if (!isLoggedIn) return <Navigate to="/authentication" />;
    return (
        <Layout page='Add new Blog'>
            <Cloud>
                Now time to create the form that will live inside this cloud
            </Cloud>
        </Layout>
    );
};

export default AddNewBlog;