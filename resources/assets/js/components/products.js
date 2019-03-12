import React, { Component } from 'react'
import Nav from './navbar'


class Products extends Component {

  render() {
    return (
       <div className="products">
          <Nav />
          Products
          <ul>
            <li> Engagement Survey </li>
            <li> Exit Management survey </li>
            <li> Training and Assessment Survey </li>
            <li> Onboarding surveys. </li>
            <li> Employee Experience Survey </li>
          </ul>
       </div>
    )
  }

}

export default Products
