import React from "react";
import Table from 'react-bootstrap/Table';


function OrderTable(){
    return(
        <div>
            <div className="table-box" style={{height: "250px", overflow: "no-display",margin:9 }}>
                <div className="table-responsive-lg">
                    <Table className="table table-hover">
                        <thead className="text-white" style={{backgroundColor:"#575551"}} id="tblOrders">
                        <tr>
                            <th scope="col">Booking ID</th>
                            <th scope="col">Car ID</th>
                            <th scope="col">Driver ID</th>
                            <th scope="col">Customer ID</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Pickup Date</th>
                            <th scope="col">Return Date</th>
                            <th scope="col">Status</th>
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

export default OrderTable;