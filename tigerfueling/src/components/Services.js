import React, { Component } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import "../styles/Services.css"
  import Fuel from "../fuel.jpg"
  import Tackle from "../tackle.jpg"
  import Tow from "../tow.jpg";
  import withRouter from "../withRouter"
  

class Services extends Component {
    constructor(props) {
        super (props);
        this.state={};
    }
    render() {
        return (
            <div className="servicesBody">
                   <h2>
                Products & Services
            </h2>
            <MDBCard margin-top="200px">
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={Fuel} width="1000px" height="800px" fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Marine Dock Fueling</MDBCardTitle>
              <MDBCardText>
              Fueling boat service is a vital aspect of ensuring smooth sailing adventures. Boaters rely on efficient and reliable fueling services to power their aquatic journeys. Whether it's a marina with dedicated fuel docks or a mobile fueling service that comes to you, convenience and accessibility are key. Skilled professionals handle the transfer of fuel, emphasizing safety protocols and environmental considerations. From gasoline to diesel, these services cater to a variety of watercraft, ensuring that boats are adequately fueled for their voyages. Timely and dependable fueling options contribute to the overall enjoyment of the boating experience, allowing enthusiasts to focus on the open water ahead.
              </MDBCardText>
              <MDBBtn className='me-1' color='success' href='/fueling'>Learn More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={Tackle} width="1000px" height="800px" fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Bait and Tackle Deliveries</MDBCardTitle>
              <MDBCardText>
              Bait and fishing equipment delivery brings the tackle shop experience right to the angler's doorstep. This convenient service ensures that fishing enthusiasts have access to a wide array of fresh bait, lures, lines, and other essential gear without leaving the comfort of their homes. From live bait to specialized lures tailored for different species, the delivery service caters to the diverse needs of anglers. Whether it's a spontaneous fishing trip or a well-planned excursion, having the right gear delivered promptly adds an extra layer of convenience to the angling experience. Anglers can focus on perfecting their casts and enjoying the thrill of the catch, knowing that their bait and equipment needs are just a delivery away.
              </MDBCardText>
              <MDBBtn className='me-1' color='success' href='/baittackle'>Learn More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={Tow} width="1000px" height="800px" fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Towing / Rescue</MDBCardTitle>
              <MDBCardText width="400px">
              Boat towing and rescue services are the unsung heroes of the maritime world, providing a safety net for boaters navigating unforeseen challenges on the water. Whether faced with engine trouble, mechanical failures, or unexpected weather conditions, these services step in to tow distressed vessels back to safety. Equipped with skilled professionals and specialized towing vessels, they ensure a prompt and secure response to maritime emergencies. Boaters can sail with peace of mind, knowing that assistance is just a call away. Beyond towing, these services often extend their support to rescue operations, aiding stranded boaters and salvaging vessels in distress. In the vast expanse of open water, boat towing and rescue services serve as a reliable lifeline, reinforcing the spirit of camaraderie among seafaring communities.
              </MDBCardText>
              <MDBBtn className='me-1' color='success' href='/towing'>Learn More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </div>
)};
        }
export default Services;