import React from "react";
import Header from '../Header/Header'
import AuthNav from './AuthNav/Authnav';
import style from './navigation.module.css';
import photo from './photo.jpg'

function Navigation() {
    return (
        <div className={style.fon}>
            <div className={style.section}>
                
                
                <div className={style.photo} >
                    <Header />
                    <img src={photo} alt="myPhoto" className={style.myPhoto} />
                    <AuthNav />
                </div>
            </div>
            
        </div>
    )
}

export default Navigation;