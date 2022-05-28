import React from "react";
//import mod from'./Header.module.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




const HeaderMain = styled.header`
   border-bottom: 1px solid #333;
    background: #4d76c4;
       @media (max-width: 991px){
         border-bottom: 1px solid #000;
       }
`
const  Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    ul{
      display: flex;
      list-style: none;
        li{
           a{
                padding: 10px 20px;
                color: #fff;
                font-size: 15px;
                text-decoration: none;
                display: inline-block;
                transition: 0.3s;
                &:hover{
                  color: antiquewhite;
                }
           }
        }
    }
`
/*
let mod ={
    'menu': 'Header_menu__bKlxq'
}
mod.menu */

const Header = () => {
    return(
        <HeaderMain>
            <Container>
                <Router>
                <ul>
                    <li><Link to="/" activeClassName="activeNew">Home</Link></li>
                    <li><Link to="/about" activeClassName="activeNew">About</Link></li>
                    <li><Link to="/rewiews" activeClassName="activeNew">Rewiews</Link></li>
                </ul>
                </Router>
            </Container>
        </HeaderMain>
    );
}
export  default  Header;