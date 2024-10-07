import axios from "axios";

const API_URL = '/api/users/'

// register user 
const register = async(userData)=>{
    const response = await axios(API_URL, userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
// lgoin user
const login = async(userData)=>{
    const response = await axios(API_URL, userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
// logOut user
const logOut = async()=>{
   localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logOut
}

export default authService;