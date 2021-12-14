import React from 'react'
import Sodexo from '../img/sodexo.png'
import Alelo from '../img/alelo.png'
import Ticket from '../img/ticket.png'
import VR from '../img/vr.png'
import './Footer.css'

export default function Footer() {
    return(
        <div className="footer">
            <div className="logos">
                <img src={Sodexo} alt="logo sodexo"/>
                <img src={Alelo} alt="logo alelo" />
                <img src={Ticket} alt="logo Ticket" />
                <img src={VR} alt="logo VR" />
            </div>
            <p>Av. Cidade Jardim, 433 - Itaim Bibi - SP</p>
            <p>07:00 ás 19:00 SEG a SEX</p>
            <p>08:00 ás 15:00 SAB</p>
            
        </div>
        
    )

}