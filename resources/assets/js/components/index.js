import React, { Component } from 'react'
import Nav from './navbar'


class Index extends Component {

  render() {
    return (
       <div>
          <Nav />
          <div className="container text-center  title">
               <h1>Welcome to Emp. Metrics</h1>
        </div>
       </div>
    )
  }

}

export default Index
