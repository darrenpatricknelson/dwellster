// setup
import express from 'express';
const authRouter = express.Router();

// import the controller functions 
import { loginPostRequest, signupPostRequest, userGetRequest } from '../controllers/user.controller.js';

// GET USER DETAILS
// used if there is a token stored in the websites cookies
authRouter.get('/user/:token', userGetRequest);

//
// 
// 

// SIGN UP POST REQUEST
//  request made when a user is signing up
authRouter.post('/signup', signupPostRequest);

//
// 
// 

// LOGIN POST REQUEST
//  request made when a user is logging in
authRouter.post('/login', loginPostRequest);


// export
export default authRouter;