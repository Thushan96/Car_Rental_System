import {Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Link,
} from "react-router-dom";

import car_logo from  "../../assets/car_logo.png";
import Image from 'react-bootstrap/Image';


class DriverNavbar extends Component{
    render() {
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Image src={car_logo} alt={"logo"} width={150}/>
                        <Navbar.Brand as={Link} to={"/"}>Car Rental</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-5">
                                <Nav.Link as={Link} to={"/driverProfile"}>Profile</Nav.Link>
                                <Nav.Link as={Link} to={"/driverSchedule"}>Schedule</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to={"/"}>Sign Out</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }


}
export default DriverNavbar;