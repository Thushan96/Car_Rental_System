import React from "react";
import HomePage from "../pages/homePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "../components/navbarComp";
import DefaultNavbarComp from "../components/defaultNavbarComp";
import {
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Profile from "../pages/profile";
import Orders from "../pages/orders";
import Customer from "../pages/Customer";
import Cars from "../pages/cars";
import Drivers from "../pages/drivers";
import Payments from "../pages/payments";
import SignInForm from "../pages/SignIn";
import AdminHomePage  from "../pages/adminHomePage";
import AdminProfile from "../pages/adminProfile";


function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/Profile' element={<Profile/>}/>
                <Route exact path='/Orders' element={<Orders/>}/>
                <Route exact path='/Customers' element={<Customer/>}/>
                <Route exact path='/Cars' element={<Cars/>}/>
                <Route exact path='/Drivers' element={<Drivers/>}/>
                <Route exact path='/Payments' element={<Payments/>}/>
                <Route exact path='/SignIn' element={<SignInForm/>}/>
                <Route exact path='/adminHome' element={<AdminHomePage/>}/>
                <Route exact path='/adminProfile' element={<AdminProfile/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
