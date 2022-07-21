import React, {useState} from "react";
import NavbarComp from "../../components/navbarComp";
import CarouselFade from "../../components/secondSlider";


function AdminHomePage(){
    return(
        <div>
            <NavbarComp/>
            <CarouselFade/>
        </div>
    );
}

export default AdminHomePage;