import React from "react";
import Table from 'react-bootstrap/Table';


function driverTable(){
    return(
        <div>
            <div className="table-box" style={{height: "max-content", overflow: "no-display",margin:9 }}>
                <div className="table-responsive-lg">
                    <Table className="table table-hover">
                        <thead className="text-white" style={{backgroundColor:"#575551"}} id="tblOrders">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">NIC Number</th>
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

export default driverTable;