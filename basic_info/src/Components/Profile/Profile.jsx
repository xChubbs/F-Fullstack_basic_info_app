/* 
 ****************************************************************
 * about  : Profile app
 * file   : Profile.jsx
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
import React, { useState, useEffect } from 'react'

// Import of Router for Front interconnections
import { useNavigate } from 'react-router-dom'

// Import of Chart handler for spyder chart
import Chart from 'chart.js/auto';

// Import of API for Backend interactions
import api from '../../Api'

// Import of current_id for auth validation
import { current_id } from '../Login/Login.jsx'

// Importing of CSS for Profile
import './Profile.css'

// Import of Material UI components
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Global radarChart for refreshing
let radarChart;

// Profile: Profile definition of user validated, in case of unvalid
// user it's redirected to /noAuth app (aka 404 bad gateaway)
const Profile = () => {

    /* -------------------------- Backend Handling -------------------------- */

    // useStates for User information needed in the construction
    const [users, setUsers] = useState([]);

    // Validate Entry function: Validation of a correct ID for construction
    const validateUserEntry = async () => {

        // Validation of Valid entry: current_id = -1 (Default case)
        if (current_id === -1) {
            navigate("/NoAuth")
        } else {
            const response = await api.get('/users/')
            setUsers(response.data)
        }
    };

    // Validation and get of the database for construction
    useEffect(() => { validateUserEntry(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Definition of user of interest
    const user = users[current_id]

    /* -------------- User: elements definitions -------------- */
    var user_pfp; var name; var username; var email;
    var position; var skills; var skill_grades;

    // Default designation of values: Undefined state of answer
    if (typeof (user) === typeof (undefined)) {

        // Dummy definitions: Needed for rendering
        user_pfp = "Lorem Ipsum";
        name = "Lorem Ipsum";
        username = "Lorem Ipsum";
        email = "Lorem Ipsum";
        position = "Lorem Ipsum";
        skills = "Lorem Ipsum";
        skill_grades = "Lorem Ipsum";

    } else {

        // User defined values: user selected from DB
        // - user_pfp    : Initials of First and Last name
        // - name        : String concat of First and Last name
        // - username    : Same as defined in signup
        // - email       : Same as defined in signup
        // - position    : Inned Position defined in signup
        // - skills      : List of extracted skills
        // - skill grades: List of corresponding grades
        user_pfp = user.FirstName[0] + user.LastName[0];
        name = user.FirstName + " " + user.LastName;
        username = user.Username;
        email = user.email;
        position = user.Position;
        skills = user.SkillSet.match(/[A-Za-z]+/g);
        skill_grades = user.SkillGrade.match(/[0-9]+.[0-9]+/g);

        // Preparation of Spyder Chart values: Skills & Skill grades
        //  - Data   : Need of labels & Float grades (Color definition to match)
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

        //  - Config : Definition of type of chart, Data predifined, and conections
        var config = {
            type: 'radar',
            data: data,
            options: { elements:{ line: {borderWidth: 2}} }
        };

        //  - radarCanvas: Canvas ID definiton for Chart display
        var radarCanvas = document.getElementById("radarChart");

        // Refresh behaviour -> If existent canvas and not fully rendered,
        // Destroy of canvas and definition of new.
        if (radarChart) {
            radarChart.destroy();
        }

        // Definition of chart with ID and configuration
        radarChart = new Chart(radarCanvas, config);
    };

    // Navegation Control
    const navigate = useNavigate();

    // Response of Page: User Front
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