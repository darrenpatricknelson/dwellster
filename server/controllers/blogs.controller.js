// imports
import Blog from '../models/blogs.model.js';
import User from '../models/user.model.js';
import Community from '../models/community.model.js';
import jwt from 'jsonwebtoken';

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
export const createBlogPost = async () => {
    const { token, payload, communityKey } = req.body;

    // authenticating the user
    const user = await User.find({ token });

    // check if the user exists
    if (!user) {
        res.send(404).json({
            status: 404,
            err: 'User not found'
        });
    }

    // check if the user is an admin
    if (!user.admin) {
        res.send(404).json({
            status: 404,
            err: 'User is not an admin'
        });
    }

    // user is an admin so now we create a blog post
    // deconstruct the payload
    const { title, description } = payload;

    // create the blog in the database
    try {
        const blog = await Blog.create({ title, description });

        // once that blog is created an it to the community
        const community = addBlog(blog, communityKey);

        // response
        res.status(200).send({
            status: 200,
            community
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            err
        });
    }
};

// DELETE A BLOG POST
export const deleteBlogPost = async () => {
    const { token, blogID, communityKey } = req.body;

    // authenticating the user
    const user = await User.find({ token });

    // check if the user exists
    if (!user) {
        res.send(404).json({
            status: 404,
            err: 'User not found'
        });
    }

    // check if the user is an admin
    if (!user.admin) {
        res.send(404).json({
            status: 404,
            err: 'User is not an admin'
        });
    }

    // user is an admin so now we can delete a blog post
    try {
        const blog = await Blog.findById(blogID);

        // delete the blog using function
        const community = deleteBlog(blog, communityKey);

        // response
        res.status(200).send({
            status: 200,
            community
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            err
        });
    }
};