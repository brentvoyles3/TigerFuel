import React, { Component } from 'react'
import "../styles/Register.css"
import { withRouter } from '../withRouter';

class Register extends Component {
    constructor(props) {
        super (props);
        this.state={
fname: "",
lname: "",
email: "",
password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(e){
e.preventDefault();
const {fname, lname, email, password } = this.state;
console.log("Name:", fname, lname, "Email:", email, "Password:", password);
fetch("http://localhost:5000/register", {
  method:"POST",
  crossDomain:true,
  headers:{
    "Content-Type": "application/json",
    Accept:"application/json",
    "Access-Control-Allow-Origin":"*",
  },
  body:JSON.stringify ({
    fname,
    email,
    lname,
    password,
  }),
}).then((res) => res.json())
.then((data) => {
  console.log(data, "userRegister");
  alert("Creating Account...");
  this.props.navigate('/login');
});
    }

  render() {
    return (
      <div className='d-flex justify-content-center align-items-center vh-100 registerPage'>
      <div className='p-3 rounded w-25 border registerForm'>
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">User Registration</h2>
            <input className="form-control rounded-0" 
            type="name" 
            name="name" 
            placeholder="First Name" 
            onChange={e => this.setState({fname: e.target.value})}
            />
            <input className="form-control rounded-0" 
            type="name" 
            name="name" 
            placeholder="Last Name" 
            onChange={e => this.setState({lname: e.target.value})}
            />
            <input className="form-control rounded-0" 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            onChange={e => this.setState({email: e.target.value})}
            />
            <input className="form-control rounded-0" 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={e => this.setState({password: e.target.value})}
            />
                 <div className="buttonHolder">
          <button className="myButton" type="submit">Create Account</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(Register);