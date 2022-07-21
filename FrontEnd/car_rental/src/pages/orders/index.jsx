import React,{Component} from "react";
import OrderTable from "../../components/orderTable";
import NavbarComp from "../../components/navbarComp";

class Orders extends Component{
    render() {
        return(
            <div>
                <NavbarComp/>
                <div style={{padding:"2px"}}>
                    <h1>Orders</h1>
                </div>
                <OrderTable/>
            </div>
        )
    }
}

export default Orders;