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

let radarChart;

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

    useEffect(() => { validateUserEntry(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Definition of user
    const user = users[current_id]

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

        // Preparation of chart values
        var data = {
            labels: skills,
            datasets: [{
                label: username, 
                data: skill_grades,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        };

        var config = {
            type: 'radar',
            data: data,
            options: { elements:{ line: {borderWidth: 2}} }
        };

        var radarCanvas = document.getElementById("radarChart");

        if (radarChart) {
            radarChart.destroy();
        }

        radarChart = new Chart(radarCanvas, config);
    };

    // Response page for user
    return (

        <div className='container'>
            <div className='header'>
                <div className='text'>Profile</div>
                <div className='underline'></div>
            </div>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Avatar sx={{ width: 60, height: 60, margin: 1 }}>{user_pfp}</Avatar>
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
                <canvas id="radarChart" width="340" height="340"></canvas>
            </Box >

            <div className='info-comeback'>
                Let's get back Home whenever you ready!
            </div>
            <IconButton aria-label="home" size="small" onClick={() => navigate("/SignIn")}>
                <FavoriteIcon fontSize="inherit" sx={{color:'#008ca8'}} />
            </IconButton>

        </div>
    )
}

export default Profile