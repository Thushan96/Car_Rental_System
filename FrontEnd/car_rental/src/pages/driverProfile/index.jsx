import React from "react";
import {Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import myImage from "../../assets/backgroundImage.jpg"
import DriverNavbar from "../../components/driverNavbar";


function DriverProfile(){
    return(
        <div>
            <DriverNavbar/>
            <div style={{backgroundColor:"#9e9898",padding:5}}>
                <b><h3>Driver Profile</h3></b>
            </div>
            <div className="row" style={{backgroundColor:"cornsilk",height:"78vh"}}>
                <div className="col-4" >
                    {/*<div className="col-8" style={{blockSize:"80%"}}>*/}
                    {/*    <h1>image</h1>*/}
                    {/*</div>*/}

                    <KitchenSinkExample/>
                </div>
                <div className="col-8" >
                    <div className="form-group " className="col-6 my-2">
                        <b><label>ID</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter ID"
                        />
                    </div>
                    <div className="form-group " className="col-6 my-2">
                        <b><label>Name</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="form-group " className="col-6 my-2">
                        <b><label>Email Address</label></b>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group " className="col-6 my-2">
                        <b><label>NIC Number</label></b>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter NIC Number"
                        />
                    </div>
                    <div className="form-group " className="col-6 my-2">
                        <b><label>Password</label></b>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2  col-2 mx-5">
                        <button type="submit" className="btn btn-dark" >
                            <b> Update </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function KitchenSinkExample() {
    return (
        <Card style={{ width: '28rem',height:'22rem' }}>
            <Card.Img className="img-fluid rounded-circle mx-5 mt-5" variant="top"  src= {myImage} style={{ width: '18rem',height:'15rem' }} />
            <Card.Body>
                <div className="col-8" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"80%"}}>
                    <Button variant="secondary" className="mx-5 mt-2">Change Photo</Button>{' '}
                </div>
            </Card.Body>
        </Card>
    );
}

export default  DriverProfile;