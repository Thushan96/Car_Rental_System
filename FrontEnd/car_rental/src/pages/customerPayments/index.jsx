import {Component} from "react";
import CustomerNavbar from "../../components/customerNavbar";
import PaymentTable from "../../components/paymentTable";

class CustomerPayments extends Component{
    render() {
        return(
            <div>
                <CustomerNavbar/>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#cacfd9"}} >
                    <h1>Payments</h1>
                </div>
                <div style={{height:"max-content",backgroundColor:"cornsilk"}}>
                    <PaymentTable/>
                </div>
            </div>
        )
    }
}
export default CustomerPayments;