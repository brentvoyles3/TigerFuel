import React, { Component } from 'react';
import "../styles/Login.css";
import { withRouter } from '../withRouter';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {email, password } = this.state;
    console.log("Email:", email, "Password:", password);
    this.setState({ isLoggedIn: true})
    fetch("http://localhost:5000/login", {
  method:"POST",
  crossDomain:true,
  headers:{
    "Content-Type": "application/json",
    Accept:"application/json",
    "Access-Control-Allow-Origin":"*",
  },
  body:JSON.stringify ({
    email,
    password,
  }),
}).then((res) => res.json())
.then((data) => {
  console.log(data, "userRegister");
  //Adding logic to keep user logged in
  //isLoggedIn = true;
  this.props.navigate('/');
});
  }
  render() {
    return (
      <div className = "body">
      <form onSubmit={this.handleSubmit}>
<div className = "container">
<h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e => this.setState({email: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e => this.setState({password: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
          
</div>
      </form>
      </div>
    )
  }
} 
export default withRouter(Login);