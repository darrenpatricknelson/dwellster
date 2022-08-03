// setup
import express from 'express';
const blogRoute = express.Router();

// import the controller functions 
import { createBlogPost, deleteBlogPost } from '../controllers/blogs.controller.js';

// Create a blog
blogRoute.post('/create', createBlogPost);

//
// 
// 

// SIGN UP POST REQUEST
//  request made when a user is signing up
blogRoute.delete('/delete', deleteBlogPost);


export default blogRoute;