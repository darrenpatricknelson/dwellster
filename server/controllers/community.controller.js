// imports
import jwt from 'jsonwebtoken';
import Blog from '../models/blogs.model.js';
import Community from '../models/community.model.js';
import User from '../models/user.model.js';

/* 
! Purpose
The purpose of this controller is interact with the community database
Requests will be made to this endpoint when:
- Admin/ User loads a community

*/

// GET COMMUNITY DATA
export const getCommunity = async (req, res) => {
    const { token, communityKey } = req.body;

    // authenticating the user
    const user = await User.find({ token });

    // check if the user exists
    if (!user) {
        res.send(404).json({
            status: 404,
            err: 'User not found'
        });
    }

    //  if the user exists, 
    // check if the community exists and is they have access
    const community = await Community.find({ communityKey });

    // check if the community exists
    if (!community) {
        res.send(404).json({
            status: 404,
            err: 'Community not found'
        });
    }

    // check if user is a member
    if (!community.members === user.email) {
        res.send(404).json({
            status: 404,
            err: 'You are not apart of this community'
        });
    }

    // if all the authentication is passed, return the community
    res.status(200).send({
        status: 200,
        community
    });

};

// 
// 
// an admin is trying to create a new community
export const createCommunity = async (req, res) => {
    const { token, title, communityKey } = req.body;


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
    if (!user[0].isAdmin) {
        res.send(404).json({
            status: 404,
            err: 'User is not an admin'
        });
    }


    try {
        // create an email variable
        const adminEmail = user[0].email;

        //  if the user exists and is an admin, 
        // create a new community
        const community = await Community.create({ adminEmail, title, communityKey });

        // response
        res.status(200).send({
            status: 200,
            community
        });
    } catch (err) {
        res.status(400).send({
            status: 400,
            errors: err
        });
    }
};

// 
// 
// a user trying to join a community
export const joinCommunity = async (req, res) => {
    const { token, communityKey } = req.body;

    // authenticating the user
    const user = await User.find({ token });

    // check if the user exists
    if (!user) {
        res.send(404).json({
            status: 404,
            err: 'User not found'
        });
    }

    //  if the user exists, 
    // check if the community exists and is they have access
    const community = await Community.find({ communityKey });

    // check if the community exists
    if (!community) {
        res.send(404).json({
            status: 404,
            err: 'Community does not exist'
        });
    }



    // if the community exists, update its members
    try {
        // create  a community id
        const communityID = community[0].id;
        // create a user
        const member = user[0].email;

        const existingMember = await Community.find({ member });

        if (existingMember) {
            res.status(400).json({
                status: 400,
                err: 'You already exist in this community'
            });
        }

        // add the new member to the members array
        await Community.updateOne(
            { _id: communityID },
            {
                $push: { members: { member } }
            }
        );


        const newCommunity = await Community.findById(communityID);

        res.status(200).send({
            status: 200,
            newCommunity
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            errors: err
        });
    }
};

// I could do the inverse of the above function to leave/ remove a user from a community but I think I have to much on my plate so I'll leave that for now


// 
// 
// adding a blog to a community
export const addBlog = async ({ blog, communityKey }) => {
    // check if the community exists and is they have access
    const community = await Community.find({ communityKey });

    // check if the community exists
    if (!community) {
        res.send(404).json({
            status: 404,
            err: 'Community not found'
        });
    }

    // create an id from the found community
    const id = community._id;

    // if the community exists, update its members
    try {
        // add the new member to the members array
        const newCommunity = await Community.updateOne(
            { _id: id },
            {
                $push: { blogs: { blog } }
            }
        );

        // return the data
        return newCommunity;
    } catch (err) {
        return err;
    }
};


// 
// 
// deleting a blog to a community
export const deleteBlog = async ({ blog, communityKey }) => {
    // check if the community exists and is they have access
    const community = await Community.find({ communityKey });

    // check if the community exists
    if (!community) {
        res.send(404).json({
            status: 404,
            err: 'Community not found'
        });
    }

    // create an id from the found community
    const id = community._id;

    // if the community exists, update its members
    try {
        // add the new member to the members array
        const newCommunity = await Community.updateOne(
            { _id: id },
            {
                $pull: { blogs: { blog } }
            }
        );

        // return the data
        return newCommunity;
    } catch (err) {
        return err;
    }
};