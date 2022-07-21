import { Form, Button } from "react-bootstrap"

// import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';



const LoginForm = () =>{

    // const {addEmployee} = useContext(EmployeeContext);

    const [newUser, setNewUser] = useState({
        Username:"", password:""
    });

    const onInputChange = (e) => {
        setNewUser({...newUser,[e.target.name]: e.target.value})
        console.log(newUser);
    }

    const {Username, password} = newUser;



    const handleSubmit = (e) => {
        e.preventDefault();
        // addEmployee(name, email, phone, address);
    }

    return (

        <Form onSubmit={handleSubmit} >
            <Form.Group style={{margin:20}} >
                <Form.Control
                    type="plaintext"
                    placeholder="Username *"
                    name="Username"
                    value={Username}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group sm="10" style={{margin:20}}>
                <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="outline-dark" type="submit" style={{marginLeft:20}} >
                Login
            </Button>
        </Form>


    )
}

export default LoginForm;