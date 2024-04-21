import React, { useState, useEffect } from 'react'
import api from '../../Api'

import { Link, useNavigate } from 'react-router-dom'

// Importing of CSS for Login
import './SignUp.css'

// Import of Material UI components
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import RecentActorsIcon from '@mui/icons-material/RecentActors';
import InsightsIcon from '@mui/icons-material/Insights';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';


// Attributions of icons: 
// <a href="https://www.flaticon.es/iconos-gratis/perfil-del-usuario" title="perfil-del-usuario iconos">Perfil-del-usuario iconos creados por Aldo Cervantes - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/contrasena" title="contrasena iconos">Contrasena iconos creados por Andrean Prabowo - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/correo-electronico" title="correo electrónico iconos">Correo electrónico iconos creados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/informacion" title="informacion iconos">Información iconos creados por deemakdaksina - Flaticon</a>

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

const SignUp = () => {

    // Backend Handling
    const [user, setUser] = useState([]);
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

    const fetchUserRegistration = async () => {
        const response = await api.get('/users/')
        setUser(response.data)
    };

    useEffect(() => {fetchUserRegistration();}, []);

    const handleInputChange = (event) => {
        setFormData({
            ...formData, [event.target.name] : event.target.value,
        });

    };

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
    };

    // Navegation Control
    const navigate = useNavigate();

    // Response page for user
    return (

        <div className='container'>

            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <MailOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="email" name="email" label="Email" variant="standard" onChange={handleInputChange} value={formData.email}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="Username" name="Username" label="Username" variant="standard" onChange={handleInputChange} value={formData.Username}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="FirstName" name="FirstName" label="First Name" variant="standard" onChange={handleInputChange} value={formData.FirstName}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="LastName" name="LastName" label="Last Name" variant="standard" onChange={handleInputChange} value={formData.LastName}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <RecentActorsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="Position" name="Position" label="Current Position" variant="standard" onChange={handleInputChange} value={formData.Position}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <InsightsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="SkillSet" name="SkillSet" label="Skills: Enlist skill 1, skill 2, ..." variant="standard" onChange={handleInputChange} value={formData.SkillSet}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <AlignVerticalBottomIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="SkillGrade" name="SkillGrade" label="Skills Grades: Enlist skill 1, skill 2, ..." variant="standard" onChange={handleInputChange} value={formData.SkillGrade}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
                    <HttpsOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="password" name="password" label="Password" variant="standard" onChange={handleInputChange} value={formData.password}/>
                </Box>
            </div>

            <div className='submit-container'>
                <div className='submit-container'>
                    <LogInButton onClick={() => navigate("/")} variant="outlined">
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