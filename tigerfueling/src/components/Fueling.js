import React, { Component } from 'react'
import "../styles/Fueling.css";
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
          <div className="d-flex justify-content-center align-items-center vh-100 fuelPage">
          <div className='p-3 rounded w-25 border fuelForm'>
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Get A Fuel Delivery Quote</h2>
            <input className="form-control rounded-0" 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={e => this.setState({name: e.target.value})}
            />

          <input className="form-control rounded-0" 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={e => this.setState({email: e.target.value})}
            />


            <input className="form-control rounded-0" 
            type="tel" 
            name="number" 
            placeholder="Phone Number" 
            onChange={e => this.setState({number: e.target.value})}
            />

            <input className="form-control rounded-0" 
            type="text" 
            name="zipcode" 
            placeholder="Zipcode" 
            onChange={e => this.setState({zipcode: e.target.value})}
            />

            <input className="form-control rounded-0" 
            type="number" 
            name="gallons" 
            placeholder="Approximate # Of Gallons" 
            onChange={e => this.setState({gallons: e.target.value})}
            />

            <input className="form-control rounded-0" 
            type="date" 
            name="date" 
            placeholder="Delivery Date" 
            onChange={e => this.setState({date: e.target.value})}
            />
          <div className="buttonHolder">
          <button className="myButton" type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
        )};
}
export default withRouter(Fueling); 