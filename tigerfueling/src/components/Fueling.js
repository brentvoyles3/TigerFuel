import React, { Component } from 'react'
import "../styles/ContactUs.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { withRouter } from '../withRouter';

class Fueling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      gallons: "",
      date: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(e){
    e.preventDefault();
    const {name, email, address, gallons, date  } = this.state;
    console.log("Name:", name, "Email:", email, "Address:", address, "Gallons:", gallons);
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
    address,
    gallons,
    date,
  }),
}).then((res) => res.json())
.then((data) => {
  console.log(data, "userMessage");
  alert("Quote requested. One of our agents will reach out to you shortly.");
});
  }

    render() {
        return (
            <div>
            <h2>
                Fueling
            </h2>
      <div className="contactContainer"> 
      <div className="contact-clean">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Get Quoted Today</h2>
          <div className="form-group">
            <input className="form-control" 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={e => this.setState({name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input className="form-control" 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={e => this.setState({email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input className="form-control" 
            type="text" 
            name="address" 
            placeholder="Address" 
            onChange={e => this.setState({address: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input className="form-control" 
            type="number" 
            name="gallons" 
            placeholder="Approximate # Of Gallons" 
            onChange={e => this.setState({gallons: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input className="form-control" 
            type="date" 
            name="date" 
            placeholder="Delivery Date" 
            onChange={e => this.setState({date: e.target.value})}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Get Quote!</button>
          </div>
        </form>
      </div>
      </div>
            </div>
        )};
}
export default withRouter(Fueling); 