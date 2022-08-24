import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// font awesome
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import { Inactive, Primary } from '../components/Buttons.js';


// styles 
// Authentication.css

// api request handlers
import { userPostRequest } from '../apiRequests/requests.api.js';

// i want to make a testable function 
export const handleValidation = (url, name, surname, email, password) => {

    // create a returnable error object
    const errors = {
        name: false,
        surname: false,
        email: false,
        password: false
    };

    // the following validations only need to be checked if the user is signing up
    if (url === 'signup') {
        // checking validations
        // my validations could be stricter but for the sake of the task, it is just to make sure that they are present so that the user knows what went wrong 
        // name
        if (!name) {
            errors.name = true;
        } else {
            errors.name = false;
        }
        // surname
        if (!surname) {
            errors.surname = true;
        } else {
            errors.surname = false;
        }
    }

    // the following validations need to be checked when the user is logging in 
    // email
    if (!email) {
        errors.email = true;
    } else {
        errors.email = false;
    }
    // password
    if (!password) {
        errors.password = true;
    } else {
        errors.password = false;
    }

    console.log(errors);
    return errors;
};

const Authentication = ({ handleAuth, isLoggedIn }) => {
    // create states
    const [isLoggingIn, setIsLoggingIn] = useState(true);
    const [isSigningUp, setIsSigningUp] = useState(false);
    // states for the form
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    // validations
    const [nameError, setNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorVal, setErrorVal] = useState(null);
    // animation
    const [isLoading, setIsLoading] = useState(false);
    // type of the password field 
    const [type, setType] = useState('password');


    // function changes the state
    // this is used to switch the user being the log in form and the sign up form
    const handleState = () => {
        setErrorVal(false);
        setIsLoggingIn(prev => !prev);
        setIsSigningUp(prev => !prev);
    };

    // function handles the users form submission request
    const handleSubmit = async (e, url) => {
        e.preventDefault();
        setIsLoading(true);

        // validation function
        const errors = handleValidation(url, name, surname, email, password);

        // name
        if (errors.name) {
            setNameError('Please enter your name');
        } else {
            setNameError('');
        }
        // surname
        if (errors.surname) {
            setSurnameError('Please enter your surname');
        } else {
            setSurnameError('');
        }
        // email
        if (errors.email) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
        // password
        if (errors.password) {
            setPasswordError('Please enter a valid 6 character password');
        } else {
            setPasswordError('');
        }
        // if there are any errors, show an oops message
        if (errors.name || errors.surname || errors.email || errors.password) {
            setErrorVal('Oops, something has gone wrong');
            setIsLoading(false);
            return;
        }


        //  create payload
        const payload = {
            'name': name,
            'surname': surname,
            'email': email,
            'password': password,
            'isAdmin': admin
        };

        // api request
        const data = await userPostRequest(payload, `/auth/${url}`);
        console.log(data);
        // the following is error validations based off of the status code I added to the response from the backend
        if (data.status === 400) {
            setIsLoading(false);
            setEmailError('');
            setPasswordError('');
            setErrorVal('Oops, something has gone wrong');
            if (data.errors.email) { setEmailError('Please enter a valid email'); }
            if (data.errors.password) { setPasswordError('Please enter a valid 6 character password'); }
            return;
        }

        // incorrect email
        if (data.status === 401) {
            setIsLoading(false);
            setEmailError('Incorrect email');
            setPasswordError('');
            setErrorVal(data.error);
            return;
        }

        // incorrect password
        if (data.status === 402) {
            setIsLoading(false);
            setPasswordError(data.error);
            setErrorVal('Oops, something has gone wrong');
            return;
        }

        // if all validations passed. We sign the user in
        handleAuth(data.user);

    };

    if (isLoggedIn) return <Navigate to="/home" />;
    return (
        <div className={'auth_container'}>
            <div className={'auth_page'}>
                <h1>Dwellster - come Dwell with us</h1>

                <div className={'auth_form'}>
                    <form>
                        {isLoggingIn && <h3>Log in</h3>}
                        {isSigningUp && <h3>Sign up</h3>}
                        {isSigningUp &&
                            <>
                                <input className={'auth_user_input'} type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                <div className={'auth_error'}>{nameError}</div>
                                <input className={'auth_user_input'} type="surname" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                                <div className={'auth_error'}>{surnameError}</div>
                            </>
                        }


                        <input className={'auth_email_input'} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className={'auth_error'}>{emailError}</div>
                        <div className={'auth_password_input'}>
                            <input type={type} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            <button onClick={(e) => {
                                e.preventDefault();
                                if (type === 'password') {
                                    setType('text');
                                } else if (type === 'text') {
                                    setType('password');
                                }
                            }}><FontAwesomeIcon icon={faEye} /></button>
                        </div>
                        <div className={'auth_error'}>{passwordError}</div>

                        {isSigningUp &&
                            <div className={'auth_checkbox'}>
                                <input type="checkbox" name="agree" id="agree" onClick={() => setAdmin(prev => !prev)} />{' '}
                                <label htmlFor="checkbox">Would you like to be an Admin?</label>
                            </div>
                        }

                        {/* a loading state animation */}
                        {isLoading ? <div className={'auth_loading'}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> :
                            <div className={'auth_buttons'}>
                                {/* depending on the state, certain buttons will be active that contain certain functions */}
                                {/* if the user is trying to log in */}
                                {isLoggingIn &&
                                    <div className={'auth_buttons'}>
                                        <div>
                                            <Primary onClick={(e) => handleSubmit(e, 'login')} text='Login' />
                                        </div>
                                        <div>
                                            <Inactive onClick={handleState} text='Sign up' />
                                        </div>
                                    </div>}
                                {/* if the user is trying to signup */}
                                {isSigningUp &&
                                    <div className={'auth_buttons'}>
                                        <div>
                                            <Inactive onClick={handleState} text='Login' />
                                        </div>
                                        <div>
                                            <Primary onClick={(e) => handleSubmit(e, 'signup')} text='Sign up' />
                                        </div>
                                    </div>
                                }
                            </div>}

                    </form>

                </div>
                <div >
                    {/* error validation */}
                    {errorVal && <h4 className={`auth_errorVal auth_error`}>{errorVal}</h4>}
                </div>
            </div>
        </div >
    );
};

export default Authentication;