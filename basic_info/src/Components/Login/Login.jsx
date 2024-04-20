import React from 'react'

// Importing of CSS for Login
import './Login.css'

// Import of assets: Icons for Login
import user_icon from '../Assets/usuario.png'
import password_icon from '../Assets/candado.png'
import email_icon from '../Assets/email.png'

// Attributions of icons: 
// <a href="https://www.flaticon.es/iconos-gratis/perfil-del-usuario" title="perfil-del-usuario iconos">Perfil-del-usuario iconos creados por Aldo Cervantes - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/contrasena" title="contrasena iconos">Contrasena iconos creados por Andrean Prabowo - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/correo-electronico" title="correo electrónico iconos">Correo electrónico iconos creados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/informacion" title="informacion iconos">Información iconos creados por deemakdaksina - Flaticon</a>

const Login = () => {
  return (

    <div className='container'>
        
        <div className='header'>
            <div className='text'>Log in</div>
            <div className='underline'></div>
        </div>

        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt='user: ' />
                <input type='user' />
            </div>
            <div className='input'>
                <img src={password_icon} alt='password: '/>
                <input type='password' />
            </div>
            <div className='input'>
                <img src={email_icon} alt='email'/>
                <input type='email' />
            </div>
        </div>

        <div className='forgot-password'><span>Did you forgot your password?</span></div>
        <div className='submit-containter'>
            <div className='submit'>Sign Up</div>
            <div className='submit'>Login</div>
        </div>
    </div>
  )
}

export default Login