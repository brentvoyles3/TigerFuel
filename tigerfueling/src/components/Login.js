import React, { Component, navigate } from 'react';
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

  validate() {
    let isValid = true;
    let emailError = "";
    let passwordError = "";

   if (!this.state.email) {
      emailError = "Email Address field is required.";
  } else {
    emailError = "";
    this.setState({ emailError });
  }

  if (!this.state.password) {
   passwordError = "Password field is required."; 
  } else {
    passwordError = "";
    this.setState({ passwordError });
  }

  if (emailError) {
      this.setState({ emailError });
      isValid = false;
  }

  if (passwordError) {
    this.setState({ passwordError });
    isValid = false;
  }
  return isValid;
}

  handleSubmit(e){
    e.preventDefault();
    const {email, password } = this.state;
    console.log("Email:", email, "Password:", password);
    this.setState({ isLoggedIn: true})
    let credentialsError = "";
    this.setState ({ credentialsError });
    if (this.validate()) {
      const data = {
        email: this.state.email,
        password: this.state.password,
      }
  }
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
  alert("Logging in")
  this.props.navigate('/');
})
}
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className='p-3 rounded w-25 border loginForm'>
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">User Login</h2>
            <input className="form-control rounded-0"
            type="email" 
            name="email" 
            autoComplete="off"
            placeholder="Enter Email Address" 
            onChange={e => this.setState({email: e.target.value})}
            />
             <span className="text-danger">{this.state.emailError}</span>
            <input className='form-control rounded-0'
            type="password" 
            name="password" 
            placeholder="Enter Password" 
            onChange={e => this.setState({password: e.target.value})}
            />
          <span className="text-danger">{this.state.passwordError}</span>    
          <div className="buttonHolder">
          <button className="myButton" type="submit">Login</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(Login);