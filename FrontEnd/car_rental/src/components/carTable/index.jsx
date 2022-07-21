import React from "react";
import Table from 'react-bootstrap/Table';


function carTable(){
    return(
        <div>
            <div className="table-box" style={{height: "max-content", overflow: "no-display",margin:9 }}>
                <div className="table-responsive-lg">
                    <Table className="table table-hover">
                        <thead className="text-white" style={{backgroundColor:"#575551"}} id="tblOrders">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Reg No</th>
                            <th scope="col">Brand</th>
                            <th scope="col">No Of Passengers</th>
                            <th scope="col">Transmission</th>
                            <th scope="col">Car Type</th>
                            <th scope="col">Color</th>
                            <th scope="col">Fuel Type</th>

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

export default carTable;