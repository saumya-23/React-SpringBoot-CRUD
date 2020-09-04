import React, { Component } from 'react'
import SignupService from '../services/SignupServcie';

class SignUpComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id
        }
        this.signupEmployee = this.signupEmployee.bind(this);
        this.loginEmployee = this.loginEmployee.bind(this);
    }

    loginEmployee = (e) => {
        e.preventDefault();
        this.props.history.push('/login');

    }

    signupEmployee = (e) => {
        e.preventDefault();

        let user = {emailId: this.state.emailId, password: this.state.password};
        SignupService.signUpEmployee(user).then(res =>{
            this.props.history.push('/employees');
        }).catch((err) => {
            debugger
            console.log(err)
            alert(err)
        });
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               <h3>SignUp Page</h3>
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

                                        <button className="btn btn-success" onClick={this.signupEmployee}>Sign Up</button>
                                        <button  style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.loginEmployee}> Login </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default SignUpComponent