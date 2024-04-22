/* 
 ****************************************************************
 * about  : No Access app
 * file   : NoAccess.jsx
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
import React from 'react'

// Import of Router for Front interconnections
import { useNavigate } from 'react-router-dom'

// Importing of CSS for No access
import './NoAccess.css'

// Import of Material UI components used
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

// No Access: 404 redirection for missing Routes
const NoAccess = () => {

    // Navegation Control: Fast Redirection
    const navigate = useNavigate();

    // Response of Page: User Front
    return (

        <div className='container'>

            <div className='header'>
                <div className='text'>404: PAGE NOT FOUND</div>
            </div>

            <div className='info-container'>
                Appears to be that you got yourself a little lost!
            </div>
            <div className='info-container'>
                Let's get you back home
            </div>

            <IconButton aria-label="home" size="small" onClick={() => navigate("/SignIn")}>
                <FavoriteIcon fontSize="inherit" sx={{color:'#008ca8'}} />
            </IconButton>

        </div>
    )
}

export default NoAccess