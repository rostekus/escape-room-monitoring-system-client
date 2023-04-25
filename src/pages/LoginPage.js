import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
         <div>
            <Link to="/register" >Register</Link>
            </div> 
            <form onSubmit={loginUser}>
                <input type="text" name="email" placeholder="Enter Email" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LoginPage
