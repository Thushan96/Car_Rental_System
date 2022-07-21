import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import Button from 'react-bootstrap/Button';
import {Modal} from "react-bootstrap";
import {useContext, useEffect, useState } from 'react';
import LoginForm from "../loginForm";
import SignInForm from "../../pages/SignIn";


function CarouselFade() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div style={{margin:0}}>
        <Carousel fade>
            <Carousel.Item>
                <img
                    style={{height:"90vh"}}
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Button variant="secondary" style={{ boxShadow: "10px 10px 10px rgba(50, 50, 50, 0.99)"}} onClick={handleShow}>Login</Button>{' '}
                    <Button variant="secondary" style={{ boxShadow: "10px 10px 10px rgba(50, 50, 50, 0.99)"}} onClick={() =>  window.location.pathname='/SignIn'} >Sign Up</Button>{' '}
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
                    <Button variant="secondary" style={{ boxShadow: "10px 10px 10px rgba(50, 50, 50, 0.99)"}} onClick={handleShow} data-toggle="modal">Login</Button>{' '}
                    <Button variant="secondary" style={{  boxShadow: "10px 10px 10px rgba(50, 50, 50, 0.99)"}} onClick={() =>  window.location.pathname='/SignIn'}> Sign Up</Button>{' '}
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
                    <Button variant="secondary" style={{ boxShadow: "10px 10px 10px rgba(50, 50, 50, 0.99)"}} onClick={handleShow}>Login</Button>{' '}
                    <Button variant="secondary" style={{ boxShadow: "10px 10px 10px rgba(50, 50, 50, 0.99)"}} onClick={() =>  window.location.pathname='/SignIn'}>Sign Up</Button>{' '}
                    <h3>Cheaper Car Rentals</h3>
                    <p>
                        Fast and Easy Car Rentals 24/7 Service.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            <Modal show={show} onHide={handleClose}  backdrop="static"
                   keyboard={false} >
                <Modal.Header closeButton style={{backgroundColor:"#c6cdcf"}}>
                    <Modal.Title>
                        <h2> User Login </h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:"#d8e8dc"}}>
                    <LoginForm />
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:"#c6cdcf"}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );


}


export default CarouselFade;