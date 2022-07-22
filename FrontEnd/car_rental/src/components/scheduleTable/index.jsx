import React from "react";
import Table from 'react-bootstrap/Table';


function DriverScheduleTable(){
    return(
        <div>
            <div className="table-box" style={{height: "max-content", overflow: "no-display",margin:9 }}>
                <div className="table-responsive-lg">
                    <Table className="table table-hover">
                        <thead className="text-white" style={{backgroundColor:"#575551"}} id="tblOrders">
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer Contact No</th>
                            <th scope="col">Car ID</th>
                            <th scope="col">Pickup Date</th>
                            <th scope="col">Return Date</th>

                        </tr>
                        </thead>
                        <tbody id="tblOrderBody">

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default DriverScheduleTable;