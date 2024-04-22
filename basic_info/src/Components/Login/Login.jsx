/* 
 ****************************************************************
 * about  : LogIn app
 * file   : Login.jsx
 * author : @alujan
 * **************************************************************
 * @information  
 * Test Login Application
 * Small implementation of a Fullstack app, based on REACT, 
 * FastAPI & SQLAlchemy
 * 
 * **************************************************************
 */

// Import of main module REACT
import React, { useState, useEffect } from 'react'

// Import of Router for Front interconnections
import { Link, useNavigate } from 'react-router-dom'

// Import of API for Backend interactions
import api from '../../Api'

// Importing of CSS for Login
import './Login.css'

// Import of Material UI components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

// Log in Button Behaviour Definition: Control of colors
const LogInButton = styled(Button)(({ theme }) => ({
    color: '#005f6f',
    borderColor: '#005f6f',
    '&:hover': { borderColor: '#039CBA', color: '#039CBA' },
}));

// Sign in Button Behaviour Definition: Control of colors
const SignUpButton = styled(Button)(({ theme }) => ({
    color: '#FFF',
    backgroundColor: '#005f6f',
    '&:hover': { backgroundColor: '#039CBA', color: '#FFF' },
}));

// Global current Id Definition: Control gate for Profile
var current_id = -1;

// Login: Sign in of known user, controlled by match of
// the user and password in the database
const Login = () => {

    /* -------------------------- Backend Handling -------------------------- */

    // useStates for Matching of information from Form to user db
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        Username: '',
        password: ''
    });

    // Get of the User database for existance validation
    const validateUserRegistration = async () => {
        const response = await api.get('/users/')
        setUsers(response.data)
    };

    // Get of the database to validate the existance of user
    useEffect(() => {validateUserRegistration();}, []);

    // Input change Handler: Form data registration and feedback
    // in form for user
    const handleInputChange = (event) => {
        setFormData({
            ...formData, [event.target.id] : event.target.value,
        });
    };

    // User Log in handler: Validation of the form input and existance on
    // the current database
    const handleUserLogIn = async (event) => {

        // Prevent of default empty of form values
        event.preventDefault();

        // Valid User/Password Flags
        var validUser = false;
        var validPass = false;

        // Validation of existance: Need for cycle over all users
        for (const id in users){

            // Declaration of current user
            const user = users[id]

            // Validation of identity
            validUser = user["Username"] === formData.Username;
            validPass = user["password"] === formData.password;

            // Export of the current ID if exist the user
            if(validUser && validPass){
                current_id = id;
                break;
            }
        }

        // Second Gate to navigate the /Profile
        if(validUser && validPass){navigate("/Profile")}

        // In case of no validation refresh of login
        setFormData({
            Username: '',
            password: ''
        });
    };

    // Navegation Control
    const navigate = useNavigate();

    // Response of Page: User Front
    return (

        <div className='container'>

            <div className='header'>
                <div className='text'>Sign in</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="Username" label="Username" variant="standard" onChange={handleInputChange} value={formData.Username}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <HttpsOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="password" label="Password" variant="standard" type="password" onChange={handleInputChange} value={formData.password}/>
                </Box>
            </div>

            <div className='submit-container'>
                <LogInButton onClick={() => navigate("/SignUp")} variant="outlined">
                    Sign Up
                </LogInButton>

                <SignUpButton variant="filled" onClick={handleUserLogIn}>
                    Log in
                </SignUpButton>
            </div>

            <div className='forgot-password-container'>
                <Link to="/404" className='forgot-password'><span>Did you forgot your password?</span></Link>
            </div>

            <div className='copyright-container'>
                <p>All rights reserved <Link to="https://github.com/xChubbs" className='git-link'>@alujan</Link></p>
            </div>
        </div>
    )
}

// Ending export of ID Matched & Login Application
export {current_id};
export default Login