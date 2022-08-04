import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// font awesome
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import { Inactive, Primary } from '../components/Buttons.js';


// styles 
import styles from '../styles/auth.module.css';

// api request handlers
import { postRequest } from '../apiRequests/requests.api.js';
;

const Authentication = ({ state, handleAuth, test, isLoggedIn }) => {
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
    const handleState = () => {
        setErrorVal(false);
        setIsLoggingIn(prev => !prev);
        setIsSigningUp(prev => !prev);
    };

    // function handles the users form submission request
    const handleSubmit = async (e, url) => {
        e.preventDefault();

        // checking validations
        // my validations could be stricter but for the sake of the task, it is just to make sure that the name exist
        if (!email || !password) {
            setErrorVal('Please enter in your details');
            return;
        }

        // Its a loading animation but this whole api request search is to fast to actual properly enjoy it. Maybe on your side you will be able to see it 
        // quite sad :(
        // setIsLoading(true);


        //  create payload
        const payload = {
            'name': name,
            'surname': surname,
            'email': email,
            'password': password,
            'isAdmin': admin
        };

        // api request
        const data = await postRequest(payload, `/auth/${url}`);

        // the following is error validations based off of the status code I added to the response from the backend
        if (data.status === 400) {
            setIsLoading(false);
            setEmailError('');
            setPasswordError('');
            if (data.errors.email) { setEmailError(data.errors.email); }
            if (data.errors.password) { setPasswordError(data.errors.password); }
            return;
        }

        if (data.status === 401) {
            setIsLoading(false);
            setEmailError('');
            setPasswordError('');
            setErrorVal(data.error);
            return;
        }

        if (data.status === 402) {
            setIsLoading(false);
            setEmailError('');
            setPasswordError('');
            setErrorVal(data.error);
            return;
        }

        if (data.status === 403) {
            setIsLoading(false);
            setEmailError('');
            setPasswordError('');
            setErrorVal(data.error);
            return;
        }

        // if no errors, update states and lost the user in
        setErrorVal(null);
        setName('');
        setSurname('');
        setEmail('');
        setPassword('');
        setIsLoading(false);
        // console.log(data);
        return handleAuth(data);
    };

    if (isLoggedIn) return <Navigate to="/home" />;
    return (
        <div className={styles.container}>
            <div className={styles.auth_page}>
                <h1>Dwellster - come Dwell with us</h1>

                <div className={styles.form}>
                    <form>
                        {isLoggingIn && <h3>Log in</h3>}
                        {isSigningUp && <h3>Sign up</h3>}
                        {isSigningUp &&
                            <>
                                <input className={styles.emailInput} type="email" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                <div className={styles.error}>{nameError}</div>
                                <input className={styles.emailInput} type="email" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                                <div className={styles.error}>{surnameError}</div>
                            </>
                        }


                        <input className={styles.emailInput} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className={styles.error}>{emailError}</div>
                        <div className={styles.passwordInput}>
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
                        <div className={styles.error}>{passwordError}</div>

                        {isSigningUp &&
                            <div className={styles.checkbox}>
                                <input type="checkbox" name="agree" id="agree" onClick={() => setAdmin(prev => !prev)} />{' '}
                                <label htmlFor="checkbox">Would you like to be an Admin?</label>
                            </div>
                        }

                        {/* a loading state animation */}
                        {isLoading ? <div className={styles.loading}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> :
                            <div className={styles.buttons}>
                                {/* depending on the state, certain buttons will be active that contain certain functions */}
                                {/* if the user is trying to log in */}
                                {isLoggingIn &&
                                    <div className={styles.auth_buttons}>
                                        <div className={styles.auth_primary}>
                                            <Primary onClick={(e) => handleSubmit(e, 'login')} text='Login' />
                                        </div>
                                        <div className={styles.auth_inactive}>
                                            <Inactive onClick={handleState} text='Sign up' />
                                        </div>
                                    </div>}
                                {/* if the user is trying to signup */}
                                {isSigningUp &&
                                    <div className={styles.auth_buttons}>
                                        <div className={styles.auth_inactive}>
                                            <Inactive onClick={handleState} text='Login' />
                                        </div>
                                        <div className={styles.auth_primary}>
                                            <Primary onClick={(e) => handleSubmit(e, 'signup')} text='Sign up' />
                                        </div>
                                    </div>
                                }
                            </div>}

                    </form>

                </div>
                <div >
                    {/* error validation */}
                    {errorVal && <h4 className={`${styles.errorVal} ${styles.error}`}>{errorVal}</h4>}
                </div>
            </div>
        </div>
    );
};

export default Authentication;