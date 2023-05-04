import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {

    return (
        <div>
            <Link to="/" >Home</Link>
            <span> | </span>

           
        </div>
    )
}

export default Header
