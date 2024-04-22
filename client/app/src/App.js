/* 
 ****************************************************************
 * about  : Main REACT app
 * file   : App.js
 * author : @alujan
 * **************************************************************
 * @information  
 * Test Login Application
 * Small implementation of a Fullstack app, based on REACT, 
 * FastAPI & SQLAlchemy
 * 
 * **************************************************************
 */

// Import of React base for application
import React from 'react'

// Import of Router for Front interconnections
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import of General CSS
import './App.css';

// Import of Routes definitions
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NoAccess from './Components/404/NoAccess';
import Profile from './Components/Profile/Profile';

// APP: Main Handling of the application:
// Routes to be handled:
//  - SignIn  : Log in for user
//  - SignUp  : Registration form
//  - Profile : Profile generation
//  - *       : 404 bad gateway Handling
const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<NoAccess/>}/>
        <Route path='/SignIn' element={<Login/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
