// creating a schema for the user model
import mongoose from 'mongoose';

// blog schema
const blogSchema = new mongoose.Schema({
    user: {
        type: Object,
        required: false
    }
});

// member schema
const memberSchema = new mongoose.Schema({
    member: {
        type: String,
        required: false
    }
});

// a schema created for the users tasks
const communitySchema = new mongoose.Schema({
    adminEmail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    communityKey: {
        type: String,
        required: true
    },
    members: [memberSchema],
    blogs: [blogSchema],
});

const Community = mongoose.model('Community', communitySchema);
export default Community;

/*
! Thought process

So only an admin can create a community 

The admin can then send the invite key to any user who can join this community
Once he/she joins the community, they can view the admins blogs 
*/