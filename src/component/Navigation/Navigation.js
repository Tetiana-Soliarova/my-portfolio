import React from "react";
import Header from '../Header/Header'
import AuthNav from './AuthNav/Authnav';
import style from './navigation.module.css';
import photo from './photo.jpg'

function Navigation() {
    return (
        <div className={style.fon}>
            <div className={style.section}>
            <Header />
            <AuthNav/>
                <img src={photo} alt="myPhoto" />
            </div>
            
        </div>
    )
}

export default Navigation;