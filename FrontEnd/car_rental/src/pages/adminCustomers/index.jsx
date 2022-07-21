import React,{Component} from "react";
import NavbarComp from "../../components/navbarComp";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CustomerTable from "../../components/customerTable";




class AdminCustomers extends Component{
    render() {
        return(
            <div>
                <NavbarComp/>
                <div style={{height:"max-content",backgroundColor:"cornsilk"}}>
                    <div style={{backgroundColor:"#cacfd9",padding:2}}>
                        <h1>Customers</h1>
                    </div>
                    <div className="row" >
                        <div className="col-6 mt-2">
                            <WithHeaderStyledCard/>
                        </div>
                        <div className="col-6">
                            <CustomerTable/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function WithHeaderStyledCard() {
    return (
        <Card >
            <Card.Header as="h5">Manage Customers</Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="form-group " className="col-4 m1-2">
                        <b><label>ID</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter ID"
                        />
                    </div>
                    <div className="form-group " className="col-4 my-1">
                        <b><label>Name</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="form-group " className="col-4 my-2">
                        <b><label>Address</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Address"
                        />
                    </div>
                    <div className="form-group " className="col-4 my-2">
                        <b><label>Email</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group " className="col-4 my-2">
                        <b><label>Contact Number</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Contact Number"
                        />
                    </div>
                    <div className="form-group " className="col-5 my-2">
                        <b><label>NIC Number</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter NIC"
                        />
                    </div>
                    <div className="form-group " className="col-5 my-2">
                        <b><label>Driving Licence Number</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Driving Licence"
                        />
                    </div>
                    <div className="form-group " className="col-5 my-2">
                        <b><label>Password</label></b>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="row">
                        <div className="col-2 mt-2">
                            <Button variant="outline-primary" style={{paddingLeft:24}}>Save</Button>
                        </div>
                        <div className="col-2 mt-2">
                            <Button variant="outline-info">Update</Button>
                        </div>
                        <div className="col-2 mt-2">
                            <Button variant="outline-danger">Delete</Button>
                        </div>
                        <div className="col-3 mt-2">
                            <Button variant="outline-dark">Get All</Button>
                        </div>
                    </div>

                </div>
            </Card.Body>
        </Card>
    );
}

export default AdminCustomers;