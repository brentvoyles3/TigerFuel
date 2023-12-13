import React, { Component } from 'react'
import withRouter from "../withRouter"

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
            <div className="towing">
            <h2>
                Towing Services
            </h2>
      <div className="contactContainer"> 
      <div className="contact-clean">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Towing / Rescue</h2>
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
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Submit Towing Request</button>
          </div>
          <p> For boat rescue emergencies call us at 678-381-7844</p>
        </form>
      </div>
      </div>
            </div>
        )};
}
export default Towing; 