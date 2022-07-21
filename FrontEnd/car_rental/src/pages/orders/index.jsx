import React,{Component} from "react";
import OrderTable from "../../components/orderTable";
import NavbarComp from "../../components/navbarComp";

class Orders extends Component{
    render() {
        return(
            <div>
                <NavbarComp/>
                <div  style={{backgroundColor:"#cacfd9",padding:2}}>
                    <h1>Orders</h1>

                <div style={{height:"max-content",backgroundColor:"cornsilk"}}>
                <OrderTable/>
                </div>
                </div>
            </div>
        )
    }
}

export default Orders;