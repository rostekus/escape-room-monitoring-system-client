import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(false)

    const history = useHistory()

    let loginUser = async (e )=> {
        e.preventDefault()
        history.push('/') 
       
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history.push('/login')
    }


    let updateToken = async ()=> {
    try{
        let response = await fetch('http://127.0.0.1:8080/api/v1/auth/refresh-token', {
            method:'POST',
            headers:{
                'Authorization': `Bearer ${authTokens?.refresh_token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
                
           
        })

        
        
        if (response.status === 200){
            let data = await response.json()
            setAuthTokens(data)
            setUser(jwt_decode(data.access_token))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }}
        catch(err){
            console.log(err)
        }
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
