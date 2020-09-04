import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import ViewEmployeeComponent from './component/ViewEmployeeComponent';
import LoginComponent from './component/LoginComponent';
import SignUpComponent from './component/SignUpComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch> 
                <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                <Route path = "/login" component = {LoginComponent}></Route>
                <Route path = "/signup" component = {SignUpComponent}></Route>
                <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
              </Switch>
            </div>   
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
