/* 
 ****************************************************************
 * about  : Sign Up app
 * file   : SignUp.jsx
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
import React, { useState } from 'react'

// Import of Router for Front interconnections
import { Link, useNavigate } from 'react-router-dom'

// Import of API for Backend interactions
import api from '../../Api'

// Importing of CSS for Login
import './SignUp.css'

// Import of Material UI components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';


import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import RecentActorsIcon from '@mui/icons-material/RecentActors';
import InsightsIcon from '@mui/icons-material/Insights';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';

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

// Sign up: Registration form for unkown user, Uncontrolled in case of
// existing and typos of user or conflicting user/password 
// (For the handling of login the selection if made on the orded of register)
const SignUp = () => {

    /* -------------------------- Backend Handling -------------------------- */

    // useStates for Matching of information from Form to user db
    // eslint-disable-next-line
    const [formData, setFormData] = useState({
        email: '',
        Username: '',
        FirstName: '',
        LastName: '',
        Position: '',
        SkillSet: '',
        SkillGrade: '',
        password: ''
    });

    // Input change Handler: Form data registration and feedback
    // in form for user
    const handleInputChange = (event) => {
        setFormData({
            ...formData, [event.target.id] : event.target.value,
        });
    };

    // User register handler: Post of the information submited
    const handleUserRegistration = async (event) => {
        event.preventDefault();
        await api.post('/users/', formData);
        setFormData({
            email: '',
            Username: '',
            FirstName: '',
            LastName: '',
            Position: '',
            SkillSet: '',
            SkillGrade: '',
            password: ''
        });

        // After post the user is send to /SignIn
        navigate("/SignIn")
    };

    // Navegation Control
    const navigate = useNavigate();

    // Response of Page: User Front
    return (

        <div className='container'>

            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2}}>
                    <MailOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="email"  name="email" label="Email" variant="standard" onChange={handleInputChange} value={formData.email}/>
                    <PermIdentityIcon sx={{ color: 'action.active', mx: 1, my: 0.5 }} />
                    <TextField id="Username" name="Username" label="Username" variant="standard" onChange={handleInputChange} value={formData.Username}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="FirstName" name="FirstName" label="First Name" variant="standard" onChange={handleInputChange} value={formData.FirstName}/>
                    <PermIdentityIcon sx={{ color: 'action.active', mx: 1, my: 0.5 }} />
                    <TextField id="LastName" name="LastName" label="Last Name" variant="standard" onChange={handleInputChange} value={formData.LastName}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <RecentActorsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="Position" name="Position" label="Current Position" variant="standard" onChange={handleInputChange} value={formData.Position}/>
                    <HttpsOutlinedIcon sx={{ color: 'action.active', mx: 1, my: 0.5 }} />
                    <TextField id="password" name="password" label="Password" variant="standard" type="password" onChange={handleInputChange} value={formData.password}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <InsightsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="SkillSet" name="SkillSet" label="Skills: List skill 1, ..." variant="standard" onChange={handleInputChange} value={formData.SkillSet}/>
                    <AlignVerticalBottomIcon sx={{ color: 'action.active', mx: 1, my: 0.5 }} />
                    <TextField id="SkillGrade" name="SkillGrade" label="Skills Grades: List (0.0 to 5.0)" variant="standard" onChange={handleInputChange} value={formData.SkillGrade}/>
                </Box>
                
            </div>

            <div className='submit-container'>
                <div className='submit-container'>
                    <LogInButton onClick={() => navigate("/SignIn")} variant="outlined">
                        Sign in
                    </LogInButton>

                    <SignUpButton onClick={handleUserRegistration} variant="filled">
                        Register
                    </SignUpButton>
                </div>
            </div>

            <div className='copyright-container'>
                <p>All rights reserved <Link to="https://github.com/xChubbs" className='git-link'>@alujan</Link></p>
            </div>

        </div>
    )
}

export default SignUp