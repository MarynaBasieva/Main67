import React from "react";
import fomod from './Footer.module.css'
const Footer = () => {
    return(
        <footer className={fomod.menu}>
            <div className="container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}

export  default  Footer;