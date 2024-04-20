import React from 'react'

// Importing of CSS for Login
import './Login.css'

// Import of Material UI components
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

// Import of assets: Icons for Login
import user_icon from '../Assets/usuario.png'
import password_icon from '../Assets/candado.png'
import email_icon from '../Assets/email.png'

// Attributions of icons: 
// <a href="https://www.flaticon.es/iconos-gratis/perfil-del-usuario" title="perfil-del-usuario iconos">Perfil-del-usuario iconos creados por Aldo Cervantes - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/contrasena" title="contrasena iconos">Contrasena iconos creados por Andrean Prabowo - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/correo-electronico" title="correo electrónico iconos">Correo electrónico iconos creados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/informacion" title="informacion iconos">Información iconos creados por deemakdaksina - Flaticon</a>

const SignInButton = styled(Button)(({ theme }) => ({
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
    return (

        <div className='container'>

            <div className='header'>
                <div className='text'>Log in</div>
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
                <SignInButton variant="outlined">
                    Sign in
                </SignInButton>

                <SignUpButton variant="filled">
                    Sign up
                </SignUpButton>
            </div>

            <div className='forgot-password'><span>Did you forgot your password?</span></div>
        </div>
    )
}

export default Login