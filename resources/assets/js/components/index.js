import React, { Component } from 'react'
import Nav from './navbar'


class Index extends Component {

  render() {
    return (
       <div>
          <Nav />
          <ul>
            <li>Employees customer focused</li>
            <li>Accelerate Innovation</li>
            <li>Brand Building</li>
          </ul>
          <div className="container text-center  title">
               <h1>Welcome to Emp. Metrics</h1>
          </div>
          <div>
            1. Flexible survey
            2. Feedback Data Analysis
            3. Aligning with Business
          </div>
       </div>
    )
  }

}

export default Index
