import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'

import './App.css';

import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NoAccess from './Components/404/NoAccess';
import Profile from './Components/Profile/Profile';


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
