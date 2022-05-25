import React from "react";
import mod from'./Header.module.css';


/*
let mod ={
    'menu': 'Header_menu__bKlxq'
}
mod.menu */

const Header = () => {
    return(
        <header className={`${mod.menu} ${mod.header}`}>
            <div className="container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}
export  default  Header;