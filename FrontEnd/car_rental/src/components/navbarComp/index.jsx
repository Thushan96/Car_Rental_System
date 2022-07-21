import {Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Link,
} from "react-router-dom";

import car_logo from  "../../assets/car_logo.png";
import Image from 'react-bootstrap/Image';


class NavbarComp extends Component{
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
                                <Nav.Link as={Link} to={"/adminHome"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/adminProfile"}>Profile</Nav.Link>
                                <Nav.Link as={Link} to={"/Orders"}>Orders</Nav.Link>
                                <Nav.Link as={Link} to={"/adminCustomers"}>Customers</Nav.Link>
                                <Nav.Link as={Link} to={"/Payments"}>Payments</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to={"/adminCars"}>Cars</Nav.Link>
                                <Nav.Link as={Link} to={"/Drivers"}>Drivers</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }


}
export default NavbarComp;