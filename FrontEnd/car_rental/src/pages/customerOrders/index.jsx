import React,{Component} from "react";
import CustomerNavbar from "../../components/customerNavbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePickerComp from "../datePicker";
import CarTable from "../../components/carTable";

class CustomerOrders extends Component{
    render() {
        return(
            <div>
                <CustomerNavbar/>
                <div  style={{backgroundColor:"#cacfd9",padding:2}}>
                    <h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>My Orders</h1>
                </div>

                <div className="row">
                        <PlaceOrderCard/>
                    </div>

                    <div style={{height:"max-content",backgroundColor:"cornsilk"}}>
                        <CarTable/>
                    </div>
                    <div className="row">
                        <div className="col-2 mt-2" style={{display:"flex",alignItems:"normal",justifyContent:"end",width:"98%"}}>
                            <Button variant="warning" style={{paddingLeft:14,paddingRight:14}}><b>Book Car</b></Button>
                        </div>
                    </div>
            </div>
        )
    }
}

function PlaceOrderCard() {
    return (
        <Card >
            <Card.Header as="h5">Place Order</Card.Header>
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
                    <div className="form-group " className="col-2 my-1">
                        <b><label>Driver</label></b>
                        <Form.Select aria-label="Default select example">
                            <option>Select Driver</option>
                            <option value="D001">Dodge</option>
                        </Form.Select>
                    </div>
                    <div className="form-group " className="col-2 my-1">
                        <b><label>Pickup Date</label></b>
                            <DatePickerComp/>
                    </div>
                    <div className="form-group " className="col-2 my-1">
                        <b><label>Return Date</label></b>
                        <DatePickerComp/>
                    </div>
                    <div className="form-group " className="col-2 my-1">
                        <b><label>Car Type</label></b>
                        <Form.Select aria-label="Default select example">
                            <option>Select Car Type</option>
                            <option value="General">General</option>
                            <option value="Premium">Premium</option>
                            <option value="Luxury">Luxury</option>
                        </Form.Select>
                    </div>

                </div>
            </Card.Body>
        </Card>
    );
}


export default CustomerOrders;