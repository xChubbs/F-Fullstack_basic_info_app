import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto';

import api from '../../Api'

import { current_id } from '../Login/Login.jsx'

// Importing of CSS for No access
import './Profile.css'

import { useNavigate } from 'react-router-dom'


// Import of Material UI components
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@mui/icons-material/Favorite';

const Profile = () => {

    // Navegation Control
    const navigate = useNavigate();

    // Backend Handling
    const [users, setUsers] = useState([]);

    const validateUserEntry = async () => {

        // Validation of Valid entry
        if (current_id === -1) {
            navigate("/NoAuth")
        } else {
            const response = await api.get('/users/')
            setUsers(response.data)
        }
    };

    useEffect(() => { validateUserEntry(); }, []);

    // Definition of user
    const user = users[current_id]
    console.log(typeof (user) === typeof (undefined))

    /* ---------------------- Elements definitions ---------------------- */
    var user_pfp; var name; var username; var email;
    var position; var skills; var skill_grades;

    // Default designation of values: Undefined state of answer
    if (typeof (user) === typeof (undefined)) {

        // Dummy definitions
        user_pfp = "Lorem Ipsum";
        name = "Lorem Ipsum";
        username = "Lorem Ipsum";
        email = "Lorem Ipsum";
        position = "Lorem Ipsum";
        skills = "Lorem Ipsum";
        skill_grades = "Lorem Ipsum";

    } else {

        // User defined values:
        user_pfp = user.FirstName[0] + user.LastName[0];    // Initials of Name
        name = user.FirstName + " " + user.LastName;
        username = user.Username;
        email = user.email;
        position = user.Position;
        skills = user.SkillSet.match(/[A-Za-z]+/g);
        skill_grades = user.SkillGrade.match(/[0-9]+.[0-9]+/g);
    };

    // Response page for user
    return (

        <div className='container'>
            <div className='header'>
                <div className='text'>Profile</div>
                <div className='underline'></div>
            </div>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Avatar sx={{ width: 50, height: 50, margin: 1 }}>{user_pfp}</Avatar>
                <div className='subheader'>
                    <div className='text-name'>{name}</div>
                </div>

            </Box >

            <Box sx={{ display: 'flex', alignItems: 'center', my: 0.2 }}>
                <div className='text-description'>{email}</div>
            </Box >

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5, mb: 3 }}>
                <div className='text-username'>{username}</div>
            </Box >

            <div className='underline-content'></div>

            <div className='subheader'>
                <div className='tex-scheme'>Skill Scheme</div>
            </div>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <div className='text-position'>{position}</div>
            </Box >

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <div className='text-position'>{position}</div>
            </Box >

        </div>
    )
}

export default Profile