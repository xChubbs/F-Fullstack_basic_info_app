import React from 'react'

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
                    <TextField id="email" label="Email" variant="standard" />
                </Box>

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
                <div className='submit-container'>
                    <LogInButton onClick={() => navigate("/")} variant="outlined">
                        Sign in
                    </LogInButton>

                    <SignUpButton onClick={() => navigate("/SignUp")} variant="filled">
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