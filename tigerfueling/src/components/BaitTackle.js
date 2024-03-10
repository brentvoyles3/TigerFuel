import React, { Component } from 'react'
import withRouter from "../withRouter"
import Item from "./Item"
import Bass from "../images/Bass.jpg"

class BaitTackle extends Component {
    constructor(props) {
        super (props);
        this.state={};
    }
    render() {
        return (
            <div>
            <h2>
                Products
            </h2>
            <Item
               name="S.C Fishing License" 
               price="$14.99"  
               img={Bass}  
                />
            </div>
        )};
}
export default BaitTackle; 