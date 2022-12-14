// imports
import jwt from 'jsonwebtoken';
import Blog from '../models/blogs.model.js';
import Community from '../models/community.model.js';
import User from '../models/user.model.js';

// import community functions
import { addBlog, deleteBlog } from './community.controller.js';

/* 
! Purpose
The purpose of this controller is interact with the blogs database
Requests will be made to this endpoint when:
- Admin creates a new blog
- Admin deletes a blog
- Admin/ User adds a comment and/ or likes a post


! Deciding on Admin updating blog posts and replies functionality

*/

// CREATING A NEW BLOG POST
export const createBlogPost = async (req, res) => {
    const { token, title, description, communityKey } = req.body;

    // authenticating the user
    const user = await User.findOne({ token });
    // check if the user exists
    if (!user) {
        res.status(404).json({
            status: 404,
            err: 'User not found'
        });
    }

    // check if the user is an admin
    if (!user.isAdmin) {
        res.status(404).json({
            status: 404,
            err: 'User is not an admin'
        });
    }

    // user is an admin so now we create a blog post
    // create the blog in the database
    try {
        const blog = await Blog.create({ title, description });
        // once that blog is created an it to the community
        const community = await addBlog(blog, communityKey);

        if (community) {
            // response
            res.status(200).send({
                status: 200,
                message: 'Blog added'
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            err
        });
    }
};

// DELETE A BLOG POST
export const deleteBlogPost = async (req, res) => {
    const { token, communityKey, blog } = req.body;

    // will use the token to identify the user, 
    // the id to get the blog in the blogs array 
    // communityKey to get the community 
    // and blogID to delete the blog

    // authenticating the user
    const user = await User.findOne({ token });

    // check if the user exists
    if (!user) {
        res.status(404).json({
            status: 404,
            err: 'User not found'
        });
    }

    // check if the user is an admin
    if (!user.isAdmin) {
        res.status(404).json({
            status: 404,
            err: 'User is not an admin'
        });
    }

    // user is an admin so now we can delete a blog post
    try {
        // delete the blog using function
        const response = await deleteBlog(communityKey, blog);

        // if the response is true
        if (!response) {
            console.log(response);
            res.status(400).json({
                status: 400,
                err: 'Failed to delete blog'
            });
        } else {
            // delete the blog from the blogs database
            const title = blog.blog.title;
            await Blog.deleteOne({ title });
            // fetch the updated community to return
            const community = await Community.findOne({ communityKey });
            // response
            res.status(200).json({
                status: 200,
                message: 'Blog deleted successfully!',
                community
            });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 400,
            err
        });
    }
};