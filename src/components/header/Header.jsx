import React from 'react'
import './Header.css'
import Logo from '../img/logoencontro1.png'

export default function Header() {
    return(

    <div className="titulo">
        <img src={Logo} alt="logo encontro paulistano"/>
        <h1>CARDÁPIO</h1>
    </div>
        
    )
}