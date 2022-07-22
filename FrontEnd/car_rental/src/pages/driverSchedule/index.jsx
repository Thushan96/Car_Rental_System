import {Component} from "react";
import DriverNavbar from "../../components/driverNavbar";
import ScheduleTable from "../../components/scheduleTable";

class DriverSchedule extends Component{
    render() {
        return(
            <div>
                <DriverNavbar/>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#cacfd9"}} >
                    <h1>Schedule</h1>
                </div>
                <div style={{height:"max-content",backgroundColor:"cornsilk"}}>
                    <ScheduleTable/>
                </div>
            </div>
        )
    }
}


export default DriverSchedule;