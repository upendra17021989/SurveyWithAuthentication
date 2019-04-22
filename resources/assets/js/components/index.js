import React, { Component } from 'react'
import Nav from './navbar'


class Index extends Component {

  render() {
    return (
       <div className="main-home">
          <Nav />
          <div className="container-home">
            <ul>
              <li>Employees customer focused</li>
              <li>Accelerate Innovation</li>
              <li>Brand Building</li>
            </ul>
            <div className="container text-center  title">
                 
            </div>
            <div>
              1. Flexible survey
              2. Feedback Data Analysis
              3. Aligning with Business
            </div>
          </div>
       </div>
    )
  }

}

export default Index
