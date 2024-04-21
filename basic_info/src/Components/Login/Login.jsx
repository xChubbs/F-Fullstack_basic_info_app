import React, { useState, useEffect } from 'react'

import api from '../../Api'

// Importing of CSS for Login
import './Login.css'

import { Link, useNavigate } from 'react-router-dom'


// Import of Material UI components
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

const LogInButton = styled(Button)(({ theme }) => ({
    color: '#005f6f',
    borderColor: '#005f6f',
    '&:hover': { borderColor: '#039CBA', color: '#039CBA' },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
    color: '#FFF',
    backgroundColor: '#005f6f',
    '&:hover': { backgroundColor: '#039CBA', color: '#FFF' },
}));

var current_id = -1;

const Login = () => {

    // Backend Handling
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        Username: '',
        password: ''
    });

    const validateUserRegistration = async () => {
        const response = await api.get('/users/')
        setUsers(response.data)
    };

    useEffect(() => {validateUserRegistration();}, []);

    const handleInputChange = (event) => {
        setFormData({
            ...formData, [event.target.id] : event.target.value,
        });
    };

    const handleUserLogIn = async (event) => {
        event.preventDefault();
        await api.get('/users/', users);

        var validUser = new Boolean(false);
        var validPass = new Boolean(false);

        // Cycle over all users
        for (const id in users){
            // Validation of identity
            const user = users[id]
            validUser = user["Username"] === formData.Username;
            validPass = user["password"] === formData.password;

            // Finally it's sent to the Profile if applied
            if(validUser && validPass){
                current_id = id;
                break;
            }
        }

        if(validUser && validPass){
            // Validation and saving of the current profile ID
            navigate("/Profile")
        }

        // In case of no validation refresh of login
        setFormData({
            Username: '',
            password: ''
        });
    };

    // Navegation Control
    const navigate = useNavigate();

    // Response page for user
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
                    <TextField id="password" label="Password" variant="standard" onChange={handleInputChange} value={formData.password}/>
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
                <Link to="/" className='forgot-password'><span>Did you forgot your password?</span></Link>
            </div>

            <div className='copyright-container'>
                <p>All rights reserved <Link to="https://github.com/xChubbs" className='git-link'>@alujan</Link></p>
            </div>
        </div>
    )
}
export {current_id};
export default Login