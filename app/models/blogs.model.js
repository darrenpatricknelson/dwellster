// creating a schema for the user model
import mongoose from 'mongoose';

// comment schema
const commentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    comment: {
        type: String,
        required: false
    }
});

/* 
! When doing testing, remember to check if the required boolean needs to be true or false for comment and likes schema
*/

// likes schema
const likesSchema = new mongoose.Schema({
    user: {
        type: String,
        required: false
    }
});

// a schema created for the blogs
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: [likesSchema],
    comments: [commentSchema],
});

const Blog = mongoose.model('Blogs', blogSchema);
export default Blog;

/*
! Thought process

So my thought process for this particular schema is having a hierarchical waterfall types system

THe blogSchema contains everything. Only an admin will be allowed to create these kind of posts while a user will only be allowed to comment and like.

The blogSchema will consist of a title, the blog (description) and an array of likes and comments

The comments schemas will consist of the user that is commenting name and comment

lastly the likes schema will simply be an array of user name's

BlogSchema > blogPost > commentSchema = likeSchema
*/