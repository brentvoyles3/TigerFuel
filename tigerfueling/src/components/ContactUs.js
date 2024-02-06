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
  alert("Message received! We will reply as soon as possible.");
  this.props.navigate('/');
});
  }

render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 contactPage">
            <div className='p-3 rounded w-25 border contactForm'>
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Contact Us</h2>
            <input className="form-control rounded-0" 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={e => this.setState({name: e.target.value})}
            />
            <input className="form-control rounded-0" 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            onChange={e => this.setState({email: e.target.value})}
            />
          <div className="form-group rounded-0">
            <textarea className="form-control" rows="6" name="message" placeholder="Message To Us..."
            onChange={e => this.setState({message: e.target.value})}>
            </textarea>
          </div>
          <div className="buttonHolder">
          <button className="myButton" type="submit">Send Message</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(ContactUs);
 