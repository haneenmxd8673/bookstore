import apiService from "../api/apiService";

// register api

export const registerAPI=async(userData)=>{
    return await apiService('POST','/register',userData)
}


//login api

export const loginAPI=async(userData)=>{
    return await apiService('POST','/login',userData)
}

export const googleLoginAPI=async(userData)=>{
    return await apiService('POST','/google-login',userData)
}