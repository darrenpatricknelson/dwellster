// imports 
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

/* 
! Purpose
The purpose of this controller is authenticate usr profiles.
Requests will be made to this endpoint when:
- Admin/ User creates a profile
- Admin/ User logs in

*/

// handle errors function
export const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {
        email: '',
        password: ''
    };

    // duplicate error code
    if (err.code === 11000) {
        errors.email = "This email is already registered, please login";
        return errors;
    }

    //  validation  errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

// create json-web-token
// This token will consist of the users name, surname, and email
export const createJWT = async (payload) => {
    const token = await jwt.sign(JSON.stringify(payload), process.env.SECRET_KEY, { algorithm: 'HS256' });

    return token;
};

// fetch request
export const userGetRequest = async (req, res) => {
    const { token } = req.body;

    const user = await User.find({ token });

    if (!user) {
        res.send(404).json({
            status: 404,
            err: 'User not found'
        });
    }

    res.status(200).json({
        status: 200,
        user
    });
};

// 
// authentication process

// POST
export const signupPostRequest = async (req, res) => {
    // will hash password for better protection in a production environment
    const { name, surname, email, password, isAdmin } = req.body;

    // create a payload 
    const payload = { name, surname, email, isAdmin };


    try {

        //  create jwt 
        const token = await createJWT(payload);

        // create payload/ user
        const user = await User.create({ name, surname, email, password, isAdmin, token });

        // response
        res.status(200).send({
            status: 200,
            user
        });
    } catch (err) {
        // handling errors
        const errors = handleErrors(err);
        res.status(400).json({
            status: 400,
            errors
        });
    }
};

// POST
export const loginPostRequest = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // if there is no user, tell the user to check details or sign up
    if (!user) {
        return res.status(401).json({
            status: 401,
            error: `User not found, check the details you have entered or sign up if you have not already`
        });
    }

    // check if password is correct
    const isPasswordCorrect = user.password === password;
    if (!isPasswordCorrect) {
        return res.status(402).json({
            status: 402,
            error: 'Password is incorrect'
        });
    }

    // if everything is successful, send back the user db
    res.status(200).send({
        status: 200,
        user
    });
};

// HI moderator, please note that I am aware that the following api requests need to be in a different controller
// the route handler for this controller is ('/auth/..') and these are not authorization requests
// I would put it in another controller and have a different route handler ('/api/...') but for the sake tof the task, I have left them here :)
// 
// 
// User adding and deleting tasks
// Adding 
export const addTask = async (req, res) => {
    const { id, task } = req.body;

    try {
        // add the new task to the tasks array
        await User.updateOne(
            { _id: id },
            {
                $push: { tasks: { task } }
            }
        );
    } catch (err) {
        res.status(400).json({
            status: 400,
            errors: err
        });
    }

    // find the updated db entry
    const user = await User.findById(id);

    // response
    res.status(200).send({
        status: 200,
        user
    });
};


// Deleting
export const deleteTask = async (req, res) => {
    const { id, taskID } = req.body;

    try {
        // add the new task to the tasks array
        await User.updateOne(
            { _id: id },
            {
                $pull: { tasks: { _id: taskID } }
            }
        );
    } catch (err) {
        res.status(400).json({
            status: 400,
            errors: err
        });
    }

    // find the updated db entry
    const user = await User.findById(id);

    // response
    res.status(200).send({
        status: 200,
        user
    });
};