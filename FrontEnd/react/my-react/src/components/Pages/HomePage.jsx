import Banner from "../Banner/Banner.jsx";
import styled from 'styled-components';
import React from "react";
import ImgStreng from '../../img/img.jpeg';
import BgSectionSreng from '../../img/imgNew.jpeg';
const Bgsection = styled.div`
  padding:200px 0;
  background:url(${BgSectionSreng}) no-repeat;
  background-size:cover;
  width:100%;
  
`

const HomePage = ()=>{
    return(
        <div>
            <Banner />
            <Bgsection></Bgsection>
            <img src={ImgStreng} alt="img" title="img"/>

        </div>
    );
}
export  default  HomePage;
