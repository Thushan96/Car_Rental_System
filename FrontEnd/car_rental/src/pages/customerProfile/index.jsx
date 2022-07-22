import React from "react";
import {Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Image } from "react-bootstrap";
import myImage from "../../assets/backgroundImage.jpg"
import CustomerNavbar from "../../components/customerNavbar";


function CustomerProfile(){
    return(
        <div>
            <CustomerNavbar/>
            <div style={{backgroundColor:"#9e9898",padding:5}}>
                <b><h3>Profile</h3></b>
            </div>
            <div className="row" style={{backgroundColor:"cornsilk",height:"78vh"}}>
                <div className="col-4" >
                    {/*<div className="col-8" style={{blockSize:"80%"}}>*/}
                    {/*    <h1>image</h1>*/}
                    {/*</div>*/}

                    <KitchenSink/>
                </div>
                <div className="col-8" >
                    <div className="row">
                    <div className="form-group " className="col-4 my-2">
                        <b><label>ID</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter ID"
                        />
                    </div>
                    <div className="form-group " className="col-4 my-2">
                        <b><label>Name</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Name"
                        />
                    </div><div className="form-group " className="col-4 my-2">
                        <b><label>Address</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Address"
                        />
                    </div>
                        <div className="form-group " className="col-4 my-2">
                            <b><label>Contact Number</label></b>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter Contact Number"
                            />
                        </div>
                    <div className="form-group " className="col-4 my-2">
                        <b><label>Email Address</label></b>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                        <div className="form-group " className="col-4 my-2">
                            <b><label>NIC Number</label></b>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter NIC Number"
                            />
                        </div>
                        <div className="form-group " className="col-4 my-2">
                            <b><label>Driving License Number</label></b>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter Driving License"
                            />
                        </div>

                    <div className="form-group " className="col-4 my-2">
                        <b><label>Password</label></b>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    </div>
                    <div className="d-grid gap-2  col-2 mx-2 mt-3">
                        <button type="submit" className="btn btn-dark">
                            <b> Update </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function KitchenSink() {
    return (
        <Card style={{ width: '28rem',height:'22rem' }}>
            <Card.Img className="img-fluid rounded-circle mx-5 mt-5" variant="top"  src= {myImage} style={{ width: '18rem',height:'15rem' }} />
            <Card.Body>
                <div className="col-8">
                    <Button variant="secondary" className="mx-5 mt-2">Change Photo</Button>{' '}
                </div>
            </Card.Body>
        </Card>
    );
}

export default  CustomerProfile;