import React, {useState} from "react";
import Slider from "../../components/slider";
import DefaultNavbarComp from "../../components/defaultNavbarComp";


function HomePage(){

    return(
        <div>
            <DefaultNavbarComp/>
            <Slider/>
        </div>
    );
}

export default HomePage;