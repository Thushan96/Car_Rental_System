import React,{Component} from "react";
import NavbarComp from "../../components/navbarComp";
import PaymentTable from "../../components/paymentTable";

class Orders extends Component{
    render() {
        return(
            <div>
                <NavbarComp/>
                <div  style={{backgroundColor:"#cacfd9",padding:2}}>
                    <h1>Payments</h1>

                    <div style={{height:"max-content",backgroundColor:"cornsilk"}}>
                        <PaymentTable/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders;