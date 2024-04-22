/* 
 ****************************************************************
 * about  : Declaration of API connection
 * file   : Api.js
 * author : @alujan
 * **************************************************************
 * @information  
 * Test Login Application
 * Small implementation of a Fullstack app, based on REACT, 
 * FastAPI & SQLAlchemy
 * 
 * **************************************************************
 */

// Import of Axios Dependencies: API connection
import axios from 'axios'

// Declaration of API: No need for further declaration on Front
const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export default api;