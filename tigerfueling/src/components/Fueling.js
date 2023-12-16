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
      number: "",
      zipcode: "",
      gallons: "",
      date: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(e){
    e.preventDefault();
    const {name, email, number, zipcode, gallons, date  } = this.state;
    console.log("Name:", name, "Email:", email, "Number:", number, "Zipcode", zipcode, "Gallons:", gallons);
    fetch("http://localhost:5000/quote", {
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
    number,
    zipcode,
    gallons,
    date,
  }),
}).then((res) => res.json())
.then((data) => {
  console.log(data, "userMessage");
  alert("Quote requested. One of our agents will reach out to you shortly.");
  this.props.navigate('/');
});
  }

    render() {
        return (
            <div className="body">
            <h2>
                Fueling
            </h2>
      <div className="contactContainer"> 
      <div className="contact-clean">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Get a Fuel Delivery Quote</h2>
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
            type="tel" 
            name="number" 
            placeholder="Phone Number" 
            onChange={e => this.setState({number: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input className="form-control" 
            type="text" 
            name="zipcode" 
            placeholder="Zipcode" 
            onChange={e => this.setState({zipcode: e.target.value})}
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