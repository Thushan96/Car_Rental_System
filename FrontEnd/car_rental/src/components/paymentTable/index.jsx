import React from "react";
import Table from 'react-bootstrap/Table';


function PaymentTable(){
    return(
        <div>
            <div className="table-box" style={{height: "max-content", overflow: "no-display",margin:9 }}>
                <div className="table-responsive-lg">
                    <Table className="table table-hover">
                        <thead className="text-white" style={{backgroundColor:"#575551"}} id="tblOrders">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Type</th>
                            <th scope="col">Amount</th>
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

export default PaymentTable;