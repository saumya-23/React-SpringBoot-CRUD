import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            emailId: ''
        }
        this.loginEmployee = this.loginEmployee.bind(this);
        this.signupEmployee = this.signupEmployee.bind(this);
    }

    // step 3
    
    loginEmployee = (e) => {
        e.preventDefault();
        this.props.history.push('/employees');

    }

    signupEmployee = (e) => {
        e.preventDefault();
        this.props.history.push('/signup');

    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

   getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               <h3>Login Page</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.loginEmployee}>Login</button>
                                        <button  style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.signupEmployee}> Sign Up </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginComponent