import React from 'react'
import './Master.css'
import Corpo from '../corpo/Corpo'
import Header from '../header/Header'
import Footer from '../footer/Footer'



export default function Master() {
    return(

        <div className="fundo">
            <div>
                <Header/>
                <Corpo/>
                <Footer/>
            </div>
        </div>
    )
}