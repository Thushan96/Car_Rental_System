import React,{Component} from "react";
import NavbarComp from "../../components/navbarComp";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CarTable from "../../components/carTable";
import Form from 'react-bootstrap/Form';





class AdminCars extends Component{
    render() {
        return(
            <div>
                <NavbarComp/>
                <div style={{height:"max-content",backgroundColor:"cornsilk"}}>
                    <div style={{backgroundColor:"#cacfd9",padding:2}}>
                        <h1>Customers</h1>
                    </div>
                    <div className="row" >
                        <div className="col-12 mt-2">
                            <WithHeaderStyledCar/>
                        </div>
                        <div className="col-12">
                            <CarTable/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function WithHeaderStyledCar() {
    return (
        <Card >
            <Card.Header as="h5">Manage Cars</Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="form-group " className="col-2 my-1">
                        <b><label>ID</label></b>
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Enter ID"
                        />
                    </div>
                    <div className="form-group " className="col-2 my-1" >
                        <b><label>Car Brand</label></b>
                        <Form.Select aria-label="Default select example">
                            <option>Car Brand</option>
                            <option value="Dodge">Dodge</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="BM2">BM2</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Volvo">Volvo</option>
                            <option value="Tesla">Tesla</option>
                            <option value="Audi">Audi</option>
                        </Form.Select>
                    </div>
                    <div className="form-group " className="col-2 my-1">
                        <b><label>Car Colour</label></b>
                        <Form.Select aria-label="Default select example">
                            <option>Car Colour</option>
                            <option value="Red">Red</option>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                            <option value="Blue">Blue</option>
                        </Form.Select>
                    </div>
                    <div className="form-group " className="col-2 my-1">
                        <b><label>Car Type</label></b>
                        <Form.Select aria-label="Default select example">
                            <option>Car Type</option>
                            <option value="General">General</option>
                            <option value="Premium">Premium</option>
                            <option value="Luxury">Luxury</option>
                        </Form.Select>
                    </div>
                    <div className="form-group " className="col-2 my-1">
                        <b><label>Passengers</label></b>
                        <Form.Select aria-label="Default select example">
                            <option>Passengers</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </div>
                    <div className="form-group " className="col-2 my-1">
                        <b><label>Transmission Type</label></b>
                        <Form.Select aria-label="Default select example">
                            <option>Transmission Type</option>
                            <option value="Manual">Manual</option>
                            <option value="Auto">Auto</option>
                        </Form.Select>
                    </div>
                    <div className="form-group " className="col-2 my-1">
                        <b><label>Fuel Type</label></b>
                        <Form.Select aria-label="Default select example">
                            <option>Fuel Type</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Petrol">Petrol</option>
                        </Form.Select>
                    </div>
                    <div className="form-group " className="col-2 my-2">
                        <b><label>Price For Extra KM</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Price For Extra KM"
                        />
                    </div>
                    <div className="form-group " className="col-2 my-2">
                        <b><label>Registration No</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Registration No"
                        />
                    </div>
                    <div className="form-group " className="col-2 my-2">
                        <b><label>Loss Damage Waiver</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Loss Damage Waiver"
                        />
                    </div>
                    <div className="form-group " className="col-2 my-2">
                        <b><label>Daily Rate</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Daily Rate"
                        />
                    </div>
                    <div className="form-group " className="col-2 my-2">
                        <b><label>Monthly Rate</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Monthly Rate"
                        />
                    </div>
                    <div className="form-group " className="col-2 my-2">
                        <b><label>Free Millage Price</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Free Millage Price"
                        />
                    </div>
                    <div className="form-group " className="col-2 my-2">
                        <b><label>Free Millage Duration</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Free Millage Duration"
                        />
                    </div>
                    <div className="col-1 " style={{marginTop:"2.7vw"}}>
                        <Button variant="outline-primary" style={{paddingLeft:24}}>Save</Button>
                    </div>
                    <div className="col-1 mr-4" style={{marginTop:"2.7vw"}}>
                        <Button variant="outline-info">Update</Button>
                    </div>
                    <div className="col-1 mr-4" style={{marginTop:"2.7vw"}}>
                        <Button variant="outline-danger">Delete</Button>
                    </div>
                    <div className="col-2 " style={{marginTop:"2.7vw"}}>
                        <Button variant="outline-dark">Get All</Button>
                    </div>
                    <div>

                    </div>

                </div>
            </Card.Body>
        </Card>
    );
}

export default AdminCars;