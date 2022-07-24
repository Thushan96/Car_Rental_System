import React,{Component} from "react";
import dodge from "../../assets/img/cars/2021 dodge.jpg"
import Chevrolet from "../../assets/img/cars/2021-Chevrolet-Camaro (1).jpg"
import bmw8 from "../../assets/img/cars/2022-BMW-8_Series.jpg"
import hyundai from "../../assets/img/cars/2021-Hyundai-Elantra.jpg"
import mazda from "../../assets/img/cars/2021-Mazda-Mazda3.jpg"
import corolla from "../../assets/img/cars/2021-Toyota-Corolla.jpg"
import volvo from "../../assets/img/cars/2021-Volvo-S60.jpg"
import tesla from "../../assets/img/cars/2021-Tesla-Model_3.jpg"
import audi from "../../assets/img/cars/2021-Audi-A4.jpg"

class Cars extends Component{
    render() {
        return(
            <section className="sectionArea" style={{ backgroundColor:"#b1b895"}}>
                <div className="featuresTop" style={{backgroundColor:"darkgray"}}>
                    <b><h2 id="db_newCarReviews">New Arrivals</h2></b>
                    <p> Our expert reviewers report back with the latest </p>
                </div>
                <div className="featuresBody">
                    <div className="row">

                        <div className="col-3">
                            <div className="item">
                                <div className="zoom">
                                    <img style={{width:"20vw"}} src={dodge}/>
                                </div>
                                <div className="itemText">
                                    <h3> 2021 Dodge Challenger </h3>
                                    <p>
                                        One of the last American muscle coupes on the market,
                                        the Dodge Challenger provides performance enthusiasts with classic styling,
                                        impressive performance, and modern amenities.
                                    </p>
                                    <a href="#" className="btnDetails" id="db_car1"> More Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="item">
                                <div className="zoom">
                                    <img style={{width:"20vw"}} src={Chevrolet}/>
                                </div>
                                <div className="itemText">
                                    <h3> 2021 Chevrolet Camaro </h3>
                                    <p>
                                        The Chevrolet is a two-door coupe that has been a sporty
                                        and affordable choice for six generations.Acceleration,handling,
                                        and braking compete with more expensive sports cars.
                                    </p>
                                    <a href="#" className="btnDetails" id="db_car2"> More Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="item">
                                <div className="zoom">
                                    <img style={{width:"20vw"}} src={bmw8}/>
                                </div>
                                <div className="itemText">
                                    <h3> 2022 BM2 8 Series </h3>
                                    <p>
                                        The BMW 8-Series delivers the grandeur of a full-size luxury
                                        car in a streamlined sports coupe. The large, quiet interior
                                        is wrapped in premium Merino leather and offers options
                                        like surround-sound audio and semi-autonomous driving
                                    </p>
                                    <a href="#" className="btnDetails" id="db_car3"> More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featuresBody">
                    <div className="row">

                        <div className="col-3">
                            <div className="item">
                                <div className="zoom">
                                    <img style={{width:"20vw"}} src={hyundai}/>
                                </div>
                                <div className="itemText">
                                    <h3> 2021 Hyundai Elantra </h3>
                                    <p>
                                        Larger inside and out, the all-new 2021 Hyundai Elantra
                                        now offers one of the most spacious cabins in the class in
                                        addition to useful technology and outstanding build quality.
                                        New hybrid and performance models round out the lineup.
                                    </p>
                                    <a href="#" className="btnDetails" id="db_car4"> More Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="item">
                                <div className="zoom">
                                    <img style={{width:"20vw"}} src={mazda}/>
                                </div>
                                <div className="itemText">
                                    <h3>2021 Mazda Mazda </h3>
                                    <p>
                                        The Mazda Mazda3 is a compact sedan and hatchback with an
                                        upscale cabin and sportier handling than rivals. It offers
                                        three engine choices and front- or all-wheel-drive.
                                        The Mazda3's body looks like a European sport sedan,
                                        and it has the driving dynamics to match
                                    </p>
                                    <a href="#" className="btnDetails" id="db_car5"> More Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="item">
                                <div className="zoom">
                                    <img style={{width:"20vw"}} src={corolla}/>
                                </div>
                                <div className="itemText">
                                    <h3> 2021 Toyota Corolla </h3>
                                    <p>
                                        The 2021 Toyota Corolla sets the standard for reliable transportation,
                                        a reputation that has made it one of the best-selling models
                                        of all time. Modern technology, a standard suite of advanced safety features,
                                        and the availability of a fuel-sipping hybrid
                                    </p>
                                    <a href="#" className="btnDetails" id="db_car6"> More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featuresBody">
                    <div className="row">

                        <div className="col-3">
                            <div className="item">
                                <div className="zoom">
                                    <img style={{width:"20vw"}} src={volvo}/>
                                </div>
                                <div className="itemText">
                                    <h3> 2021 Volvo S60 </h3>
                                    <p>
                                        Volvo's safety innovations make their way into the spacious
                                        and comfortable S60 sedan. While it is not as focused on
                                        sporty handling as German competitors, the S60 offers one
                                        of the most beautiful interiors in its class, with rich
                                    </p>
                                    <a href="#" className="btnDetails" id="db_car7"> More Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="item">
                                <div className="zoom">
                                    <img style={{width:"20vw"}} src={tesla}/>
                                </div>
                                <div className="itemText">
                                    <h3>2021 Tesla Model </h3>
                                    <p>
                                        Under $40,000, the Tesla Model 3 is a compact sedan with
                                        sleek exterior styling and sporty handling to compete
                                        against top European rivals. It runs entirely on electricity,
                                        delivering quick acceleration and 263 miles of driving range.
                                    </p>
                                    <a href="#" className="btnDetails" id="db_car8"> More Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="item">
                                <div className="zoom">
                                    <img style={{width:"20vw"}} src={audi}/>
                                </div>
                                <div className="itemText">
                                    <h3> 2021 Audi A4 </h3>
                                    <p>
                                        The compact Audi A4 luxury sedan is a great way to
                                        add some pampering and sophistication to the daily drive.
                                        Customers get to choose from two turbocharged engines.
                                        On the road, the cabin remains quiet at speed; handling
                                        On the road, the cabin remains quiet at
                                    </p>
                                    <a href="#" className="btnDetails" id="db_car9"> More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Cars;