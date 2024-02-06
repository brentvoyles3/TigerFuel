import React, { Component } from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
    } from "mdb-react-ui-kit";
import "../styles/ShoppingCart.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class ShoppingCart extends Component {
    constructor(props) {
        super (props);
        this.state={};
    }
    render() {
        return (
            <section className="h-100 gradient-custom">
            <MDBContainer className="py-5 h-100">
              <MDBRow className="justify-content-center my-4">
                <MDBCol md="8">
                  <MDBCard className="mb-4">
                    <MDBCardHeader className="py-3">
                      <MDBTypography tag="h5" className="mb-0">
                        Cart - 2 items
                      </MDBTypography>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                          <MDBRipple rippleTag="div" rippleColor="light"
                            className="bg-image rounded hover-zoom hover-overlay">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                              className="w-100" />
                            <a href="#!">
                              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                              </div>
                            </a>
                          </MDBRipple>
                        </MDBCol>
          
                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                          <p>
                            <strong>Denim Fishing Shirt</strong>
                          </p>
                          <p>Color: blue</p>
                          <p>Size: M</p>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />
                          </div>
                          <p className="text-start text-md-center">
                           {/*<strong>$69.69</strong>*/}
                          </p>
                        </MDBCol>
                      </MDBRow>
          
                      <hr className="my-4" />
          
                      <MDBRow>
                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                          <MDBRipple rippleTag="div" rippleColor="light"
                            className="bg-image rounded hover-zoom hover-overlay">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                              className="w-100" />
                            <a href="#!">
                              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                              </div>
                            </a>
                          </MDBRipple>
                        </MDBCol>
          
                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                          <p>
                            <strong>Red Fishing Hoodie</strong>
                          </p>
                          <p>Color: red</p>
                          <p>Size: M</p>
          
                          
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>               
                            <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />                          
                          </div>
          
                          <p className="text-start text-md-center">
                            {/*<strong>$69.69</strong>*/}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
          
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <p>
                        <strong>Expected shipping delivery</strong>
                      </p>
                      <p className="mb-0">02.10.2024 - 03.01.2024</p>
                    </MDBCardBody>
                  </MDBCard>
          
                  <MDBCard className="mb-4 mb-lg-0">
                    <MDBCardBody>
                      <p>
                        <strong>We accept</strong>
                      </p>
                      <MDBCardImage className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa" />
                      <MDBCardImage className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express" />
                      <MDBCardImage className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard" />
                      <MDBCardImage className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                        alt="PayPal acceptance mark" />
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardHeader>
                      <MDBTypography tag="h5" className="mb-0">
                        Summary
                      </MDBTypography>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBListGroup flush>
                        <MDBListGroupItem
                          className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Products
                          <span>$53.98</span>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                          Shipping
                          <span>$10.69</span>
                        </MDBListGroupItem>
                        <MDBListGroupItem
                          className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total amount</strong>
                            <strong>
                              <p className="mb-0">(including Tax)</p>
                            </strong>
                          </div>
                          <span>
                            <strong>$64.67</strong>
                          </span>
                        </MDBListGroupItem>
                      </MDBListGroup>
                      <div className="buttonHolder">
                    <button className="myButton" type="submit">Go To Checkout</button>
                    </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
          );
          }
}

export default ShoppingCart;