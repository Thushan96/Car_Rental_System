import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

function CarouselFade() {


    return (
        <>
            <Carousel fade>




















                <Carousel.Item>
                    <img
                        style={{height:"90vh"}}
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Don't Dream it,Drive it!</h3>
                        <p>Low Cost plans to fix Your Budget</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height:"90vh"}}
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Be treated like a Boss</h3>
                        <p>Come over for a car rent.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height:"90vh"}}
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Cheaper Car Rentals</h3>
                        <p>
                            Fast and Easy Car Rentals 24/7 Service.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );


}


export default CarouselFade;