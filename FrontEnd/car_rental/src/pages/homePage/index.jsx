import React, {useState} from "react";
import Slider from "../../components/slider";
import DefaultNavbarComp from "../../components/defaultNavbarComp";
import Cars from "../cars";
import {Image} from "react-bootstrap";
import {MDBFooter} from "mdbreact";
import Footer from "../../components/footer";



function HomePage(){

    return(
        <div>
            <DefaultNavbarComp/>
            <Slider/>
            <Cars/>
            <Footer/>
        </div>
    );
}

export default HomePage;