// setup
import express from 'express';
const communityRouter = express.Router();

// import the controller functions 
import { getCommunity, joinCommunity } from '../controllers/community.controller.js';

// GET COMMUNITY DETAILS
// used if there is a communityKey stored in the websites cookies
communityRouter.get('/community', getCommunity);

//
// 
// 

// JOIN COMMUNITY POST REQUEST
//  request made when a user is signing up
communityRouter.post('/join', joinCommunity);


// export
export default communityRouter;