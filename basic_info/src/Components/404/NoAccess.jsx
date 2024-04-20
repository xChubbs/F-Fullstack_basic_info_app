import React from 'react'

// Importing of CSS for No access
import './NoAccess.css'

import { useNavigate } from 'react-router-dom'


// Import of Material UI components
import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@mui/icons-material/Favorite';

const NoAccess = () => {

    // Navegation Control
    const navigate = useNavigate();

    // Response page for user
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

            <IconButton aria-label="home" size="small" onClick={() => navigate("/")}>
                <FavoriteIcon fontSize="inherit" sx={{color:'#008ca8'}} />
            </IconButton>

        </div>
    )
}

export default NoAccess