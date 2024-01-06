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
  alert("Loggin in...");
  this.props.navigate('/');
});
  }
  render() {
    return (
      <div className="body">
        <h2> Welcome Back!</h2>
      <div className="contactContainer"> 
      <div className="contact-clean">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Sign In</h2>
          <div className="form-group">
            <input className="form-control" 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            onChange={e => this.setState({email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input className="form-control" 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={e => this.setState({password: e.target.value})}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Login);