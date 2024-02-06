import React, { Component } from 'react'
import withRouter from "../withRouter"
import "../styles/Towing.css"

class Towing extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          number: "",
          relLocation: "",
          boatModel: "",
          date: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(e){
        e.preventDefault();
        const {name, number, relLocation, boatModel, date  } = this.state;
        console.log(name, number, relLocation, boatModel, date);
      }

      render() {
        return (
          <div className='d-flex justify-content-center align-items-center vh-100 towingPage'>
    <div className='p-3 rounded w-25 border towingForm'>
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Towing & Rescue</h2>
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
            type="tel" 
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
          <div className="buttonHolder">
            <button className="myButton" onClick={this.handleSubmit}>Submit Towing Request</button>
          </div>
          <div className="strongHolder">
          <strong> For Boating Accidents And Emergencies Call 911!</strong>
          </div>
        </form>
      </div>
    </div>
        )};
}
export default Towing; 