//
import React from "react"
import background from "../../assets/backgroundImage.jpg"
import DefaultNavbarComp from "../../components/defaultNavbarComp";

export default function (props) {
    return (
        <div>
            <DefaultNavbarComp/>
        <div style={{backgroundImage: `url(${background})`,height:"96vh",paddingTop:1}}>
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content" >
                    <div className="row m-4">
                    <h2 className="Auth-form-title m-2" style={{color:"lightgoldenrodyellow"}}>Create an account</h2>
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
                        </div>
                        <div className="form-group " className="col-4 my-2 ">
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
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Contact Number"
                            />
                        </div>
                        <div className="form-group " className="col-4 my-2">
                            <b><label>NIC Number</label></b>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter NIC"
                            />
                        </div>
                        <div className="form-group " className="col-4 my-2">
                            <b><label>Driving License Number</label></b>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Driving License"
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
                        <b><label>Password</label></b>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    </div>
                    <div className="d-grid gap-2  col-2 mx-5">
                        <button type="submit" className="btn btn-dark">
                           <b> Sign Up </b>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </div>

    )
}