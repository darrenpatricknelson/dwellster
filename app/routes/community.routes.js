// setup
import express from 'express';
const communityRouter = express.Router();

// import the controller functions 
import { createCommunity, getCommunities, getCommunity, joinCommunity } from '../controllers/community.controller.js';

// GET COMMUNITY DETAILS (SINGLE COMMUNITY)
// used if there is a communityKey stored in the websites cookies
communityRouter.get('/fetch/blogs/:title', getCommunity);

// GET COMMUNITY DETAILS (ALL COMMUNITIES)
// used if there is a communityKey stored in the websites cookies
communityRouter.get('/fetch/:token', getCommunities);

//
// 
// 

// CREATE COMMUNITY POST REQUEST
//  request made when a user is signing up
communityRouter.post('/create', createCommunity);

//
// 
// 

// JOIN COMMUNITY POST REQUEST
//  request made when a user is signing up
communityRouter.patch('/join', joinCommunity);


// export
export default communityRouter;