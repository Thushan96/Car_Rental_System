import React from 'react'
import { Form } from 'react-bootstrap';

class DatePickerComp extends React.Component{

    render(){

        return(
            <div>
                <div className="row">
                    <div className="col">
                        <Form.Group controlId="dob">
                            <Form.Control type="date" name="dob" placeholder="Select Date" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        )
    }

}

export default DatePickerComp;