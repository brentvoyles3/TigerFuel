import React, { Component } from 'react'
import "../styles/ContactUs.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { withRouter } from '../withRouter';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {name, email, message } = this.state;
    console.log("Name:", name, "Email:", email, "Message:", message);
    fetch("http://localhost:5000/contactus", {
  method:"POST",
  crossDomain:true,
  headers:{
    "Content-Type": "application/json",
    Accept:"application/json",
    "Access-Control-Allow-Origin":"*",
  },
  body:JSON.stringify ({
    name,
    email,
    message,
  }),
}).then((res) => res.json())
.then((data) => {
  console.log(data, "userMessage");
});
  }

render() {
    return (
      <div className="contact-clean">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Contact us</h2>
          <div className="form-group">
            <input className="form-control" 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={e => this.setState({name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input className="form-control is-invalid" 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={e => this.setState({email: e.target.value})}
            />
            <small className="form-text text-danger">Please enter a correct email address.</small>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="14" name="message" placeholder="Message"
            onChange={e => this.setState({message: e.target.value})}>
            </textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ContactUs);
 