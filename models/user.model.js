// creating a schema for the user model
import mongoose from 'mongoose';
// I've installed a package via npm to validate emails
import validator from 'validator';
const { isEmail } = validator;

// a schema created for the entire user object
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    surname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password must be minimum 6 characters in length'],
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

const User = mongoose.model('Users', userSchema);
export default User;

/* 
! question

Should I be storing the jwt in the database?
*/