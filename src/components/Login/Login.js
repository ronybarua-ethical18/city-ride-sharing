import React, { useContext, useState } from 'react';
import './Login.css';
import avatar from './avatar.png';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { createUserWithEmailAndPassword, facebookSignIn, githubSignIn, googleSignIn, initializeFirebase, signInWithEmailAndPassword } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {

    //initialize firebase
    initializeFirebase();
    const [user, setUser] = useState({
        IsSignedIn: false,
        name: '',
        email: '',
        error: '',
        password: '',
        success: false
    })
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPassCorrect, setISPassCorrect] = useState('');
    const [isError, setIsError] = useState('');

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
            if (!isFormValid) {
                setEmailError('Email is invalid')
            }
            else {
                setEmailError('');
            }
        }
        if (event.target.name === 'password') {
            const passwordLength = event.target.value.length > 6;
            const hasNumber = /\d{1}/.test(event.target.value);
            isFormValid = passwordLength && hasNumber;
            if (!isFormValid) {
                setPasswordError('Password should have number and letters');
            }
            else {
                setPasswordError('');
            }
        }

        //matching the password and confirm password field
        if (password !== confirmPassword) {
            setIsError("Password and confirm password should be matched");
        } else {
            setIsError("");
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }
    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                    if (res.success === false) {
                        let error = user.error;
                        error = 'Check your email or password';
                        return setISPassCorrect(error);
                    }
                })
        }
        if (user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                    setISPassCorrect(res.error);
                    console.log(user);
                })
        }
        event.preventDefault();
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    const handleGithhubSignIn = () => {
        githubSignIn()
            .then(res => {
                handleResponse(res, true);
                console.log(res);
            })
    }
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(res => {
                handleResponse(res, true);
                console.log(res);
            })
    }
    return (
        <div className="log-in authentic-field text-white">

            {/* rendering sign up  */}
            {newUser && <Container className="signUp h-100">
                <Row className="m-3 d-flex justify-content-center">
                    <Col md={6} className="p-4 text-center shadow mb-4">
                        <img src={avatar} className="img-fluid rounded avatar mb-2" alt="" />
                        <h4 className="display-6">Create New Account</h4>
                        <form action="" onSubmit={handleSubmit} className="mt-4">
                            <div className="input-field mb-3">
                                <FontAwesomeIcon className="icons" icon={faSignature}></FontAwesomeIcon>
                                <input onBlur={handleBlur}
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name" required />
                            </div>

                            <div className="input-field mb-3">
                                <FontAwesomeIcon className="icons" icon={faUser}></FontAwesomeIcon>
                                <input onBlur={handleBlur}
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email" required />
                            </div>
                            <p>{emailError}</p>
                            <div className="input-field mb-3">
                                <FontAwesomeIcon className="icons" icon={faLock}></FontAwesomeIcon>
                                <input value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    onBlur={handleBlur}
                                    type="password"
                                    name="password"
                                    placeholder="Enter password" id="" required />
                            </div>
                            <p>{passwordError}</p>
                            <div className="input-field mb-3">
                                <FontAwesomeIcon className="icons" icon={faLock}></FontAwesomeIcon>
                                <input
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    onBlur={handleBlur}
                                    type="password"
                                    name="confirm-password"
                                    placeholder="Confirm password" id="" required />
                            </div>
                            <p>{isError}</p>
                            <button type="submit" className="submit-button mb-2">Sign Up</button>
                            <p>Already have an account? <b className="text-primary" onClick={() => setNewUser(!newUser)}><b className="text-white">Log in</b></b> </p>
                            <p>Sign in with social platforms</p>

                            <div className="social-icons d-flex w-100 justify-content-center ">
                                <FontAwesomeIcon onClick={handleGoogleSignIn}
                                    icon={faGoogle}
                                    className="social-icon mr-3"></FontAwesomeIcon>
                                <FontAwesomeIcon onClick={handleGithhubSignIn}
                                    icon={faGithub}
                                    className="social-icon mr-3"></FontAwesomeIcon>
                                <FontAwesomeIcon onClick={handleFacebookSignIn}
                                    icon={faFacebook}
                                    className="social-icon mr-3"></FontAwesomeIcon>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>}

            {/* rendering log in */}
            {!newUser && <Container className="h-100">
                <Row className="m-3 d-flex justify-content-center">
                    <Col md={6} className="p-4 text-center shadow">
                        <img src={avatar} className="img-fluid rounded avatar mb-2" alt="" />
                        <h4 className="display-5">User Authentication</h4>
                        <form action="" onSubmit={handleSubmit} className="mt-4">
                            <div className="input-field mb-3">
                                <FontAwesomeIcon className="icons" icon={faUser}></FontAwesomeIcon>
                                <input onBlur={handleBlur}
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email" required />
                            </div>
                            <p>{emailError}</p>
                            <div className="input-field mb-3">
                                <FontAwesomeIcon className="icons" icon={faLock}></FontAwesomeIcon>
                                <input onBlur={handleBlur}
                                    type="password"
                                    name="password"
                                    placeholder="Enter password" id="" required />
                            </div>
                            <p>{passwordError}</p>
                            <p>{isPassCorrect}</p>
                            <div className="checkbox d-flex justify-content-space-between mb-2">
                                <div>
                                    <input type="checkbox" onChange="" name="newUser" id="" />
                                    <label htmlFor="newUser" className="ml-2">Remember Me </label>
                                </div>
                                <a href="/" className="ml-auto"><b className="text-white">Forgot Password?</b></a>
                            </div>

                            <button type="submit" className="submit-button mb-2">Log In</button>
                            <p>Don't have an account? <b className="text-primary"
                                onClick={() => setNewUser(!newUser)}><b className="text-white">create new account</b></b></p>
                            <p>Sign in with social platforms</p>

                            <div className="social-icons d-flex w-100 justify-content-center  ">

                                <FontAwesomeIcon onClick={handleGoogleSignIn}
                                    icon={faGoogle}
                                    className="social-icon mr-3"></FontAwesomeIcon>
                                <FontAwesomeIcon onClick={handleGithhubSignIn}
                                    icon={faGithub}
                                    className="social-icon mr-3"></FontAwesomeIcon>
                                <FontAwesomeIcon onClick={handleFacebookSignIn}
                                    icon={faFacebook}
                                    className="social-icon mr-3"></FontAwesomeIcon>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>}
        </div>

    );
};

export default Login;