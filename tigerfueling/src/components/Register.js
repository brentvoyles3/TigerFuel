import React, { Component } from 'react'
import "../styles/Register.css"

export default class Register extends Component {
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
});
    }

  render() {
    return (
      <div className="body">
      <form onSubmit={this.handleSubmit}>
        <div className = "container">
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={e => this.setState({fname:e.target.value})
                }
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" 
          className="form-control" 
          placeholder="Last name" 
          onChange={e => this.setState({lname:e.target.value})
        } 
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e => this.setState({email:e.target.value})
        }
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e => this.setState({password:e.target.value})
        }
          />
        </div>

        <div className="d-grid">
          <div className="mybutn">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          </div>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Sign in</a>
        </p>
        </div>
      </form>
      </div>
    )
  }
}