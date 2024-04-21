import React, { useState, useEffect } from 'react'
import api from '../../Api'

import {current_id} from '../Login/Login.jsx'

// Importing of CSS for No access
import './Profile.css'

import { useNavigate } from 'react-router-dom'


// Import of Material UI components
import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@mui/icons-material/Favorite';

const Profile = () => {

    // Navegation Control
    const navigate = useNavigate();

    // Backend Handling
    const [users, setUsers] = useState([]);

    const validateUserEntry = async () => {

        // Validation of Valid entry
        if(current_id === -1){navigate("/NoAuth")}

        const response = await api.get('/users/')
        setUsers(response.data)
    };

    useEffect(() => {validateUserEntry();}, []);

    // Definition of user
    const user = users[current_id]
    
    // Response page for user
    return (

        <div className='container'>
            <text></text>
        </div>
    )
}

export default Profile