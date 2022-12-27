import * as React from "react";

import {  useNavigate } from "react-router-dom";

import './styles.scss'

const Logo = () => {
    const navigate = useNavigate()
    const home = () => navigate('/', {replace: true})

    return (
        <img className="logo"
             onClick={() => home()}
             src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
             alt='Logo'/>

    )
}

export default Logo;