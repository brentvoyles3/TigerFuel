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
  if (data === "Success") {
  alert("Loggin in...");
  this.props.navigate('/');
  }
})
.catch(err=> console.log(err))
  }//handleSubmit

  render() {
    return (
      <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className='p-3 rounded w-25 border loginForm'>
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Sign In</h2>
            <input className="form-control rounded-0"
            type="email" 
            name="email" 
            autoComplete="off"
            placeholder="Enter Email Address" 
            onChange={e => this.setState({email: e.target.value})}
            />
            <input className='form-control rounded-0'
            type="password" 
            name="password" 
            placeholder="Enter Password" 
            onChange={e => this.setState({password: e.target.value})}
            />
            <button className="btn btn-primary w-100 rounded-0 type=submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(Login);