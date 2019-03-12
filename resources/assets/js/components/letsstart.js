import React, { Component } from 'react'
import Nav from './navbar'


class LetsStart extends Component {

  render() {
    return (
       <div className="products">
          <Nav />
            Lets Start
            <ul>
              <li>Name</li>
              <li>Last name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Number of employees</li>
              <li>Phone number</li>
              <li>Country</li>
            </ul>
          Best time to connect.
       </div>
    )
  }

}

export default LetsStart
