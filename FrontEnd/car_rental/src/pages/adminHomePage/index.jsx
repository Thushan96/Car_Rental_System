import React, {useState} from "react";
import NavbarComp from "../../components/navbarComp";
import Card from 'react-bootstrap/Card';
import CusIcon from "../../assets/icons/icons8_customer_64.png"
import CarIcon from "../../assets/icons/icons8_car_64.png"
import DriverIcon from "../../assets/icons/icons8_driver_64.png"
import PurchaseIcon from "../../assets/icons/icons8_purchase_order_64.png"
import DailyChart from "../../components/dailyChart/index";
import WeeklyChart from "../../components/weeklyChart";


function AdminHomePage(){
    return(
        <>
        <div>
            <NavbarComp/>
        </div>
        <div>
            <div className="row mt-4">
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-warning py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-success font-weight-bold text-xs mb-1">
                                        <span>Customers</span>
                                    </div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span
                                        id="TxtCustomerCount">7</span>
                                    </div>
                                </div>
                                <div className="col-auto"><img id="custom_pic"
                                                               src={CusIcon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-warning py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-success font-weight-bold text-xs mb-1">
                                        <span>Cars</span>
                                    </div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span id="txtCarCount">15</span>
                                    </div>
                                </div>
                                <div className="col-auto"><img id="car_pic" src={CarIcon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-warning py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-success font-weight-bold text-xs mb-1">
                                        <span>Drivers</span></div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="text-dark font-weight-bold h5 mb-0" id="txtDriverCount">
                                                5<span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto"><img id="driver_pic"
                                                               src={DriverIcon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-warning py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-success font-weight-bold text-xs mb-1">
                                        <span>Bookings</span>
                                    </div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span
                                        id="txtOrderCount">10</span></div>
                                </div>
                                <div className="col-auto"><img id="order_pic"
                                                               src={PurchaseIcon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="card shadow mb-4">
                        <div className="card-header d-flex  align-items-start">
                            <h6 className="text-primary font-weight-bold m-0">Daily Income</h6>
                            <div style={{height:"max-content",width:"max-content"}}>
                                            <DailyChart/>
                                        </div>
                        </div>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
{/*---------------------------------------------------------2nd Chart---------------------------------------                */}
                <div className="col-6">
                    <div className="card shadow" >
                        <div className="card-header d-flex align-items-stretch">
                            <h6 className="text-primary font-weight-bold m-0">Monthly Income</h6>
                            <div style={{marginTop:"11%"}}>
                                <WeeklyChart/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        </>
    );
}

export default AdminHomePage;