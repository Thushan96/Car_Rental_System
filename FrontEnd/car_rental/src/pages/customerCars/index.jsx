import {Component} from "react";
import CustomerNavbar from "../../components/customerNavbar";
import CarTable from "../../components/carTable";

class CustomerCars extends Component{
    render() {
        return(
            <div>
                <CustomerNavbar/>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#cacfd9"}} >
                <h1>All Cars</h1>
                </div>
                <div style={{height:"max-content",backgroundColor:"cornsilk"}}>
                    <CarTable/>
                </div>
            </div>
        )
    }
}
export default CustomerCars;