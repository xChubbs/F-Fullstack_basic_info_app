import React from 'react'

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

const Login = () => {

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
                    <TextField id="Username" label="Username" variant="standard" />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <HttpsOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="password" label="Password" variant="standard" />
                </Box>
            </div>

            <div className='submit-container'>
                <LogInButton onClick={() => navigate("/SignUp")} variant="outlined">
                    Sign Up
                </LogInButton>

                <SignUpButton variant="filled">
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

export default Login