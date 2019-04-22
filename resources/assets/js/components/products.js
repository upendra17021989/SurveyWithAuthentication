import React, { Component } from 'react'
import Nav from './navbar'


class Products extends Component {

  render() {
    return (
       <div className="products">
          <Nav />
          <h3 className="text-center">Products</h3>
          
          <div className="panel-group" id="desc_accordion">
            <div className="panel panel-default">
              <div className="brown panel-heading collapsed" data-toggle="collapse" data-target="#product-detail-care" aria-expanded="true">
                Engagement Survey</div>

              <div id="product-detail-care" className="panel-collapse collapse in">
                <div className="panel-body">
                  <ul>
                    <li> Engagement Survey </li>
                    <li> Exit Management survey </li>
                    <li> Training and Assessment Survey </li>
                    <li> Onboarding surveys. </li>
                    <li> Employee Experience Survey </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="brown panel-heading collapsed" data-toggle="collapse" data-target="#product-detail-care" aria-expanded="true">
                Exit Management survey</div>

              <div id="product-detail-care" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul>
                    <li> Engagement Survey </li>
                    <li> Exit Management survey </li>
                    <li> Training and Assessment Survey </li>
                    <li> Onboarding surveys. </li>
                    <li> Employee Experience Survey </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="brown panel-heading collapsed" data-toggle="collapse" data-target="#product-detail-care" aria-expanded="true">
                Training and Assessment Survey</div>

              <div id="product-detail-care" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul>
                    <li> Engagement Survey </li>
                    <li> Exit Management survey </li>
                    <li> Training and Assessment Survey </li>
                    <li> Onboarding surveys. </li>
                    <li> Employee Experience Survey </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="brown panel-heading collapsed" data-toggle="collapse" data-target="#product-detail-care" aria-expanded="true">
                Onboarding surveys</div>

              <div id="product-detail-care" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul>
                    <li> Engagement Survey </li>
                    <li> Exit Management survey </li>
                    <li> Training and Assessment Survey </li>
                    <li> Onboarding surveys. </li>
                    <li> Employee Experience Survey </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="brown panel-heading collapsed" data-toggle="collapse" data-target="#product-detail-care" aria-expanded="true">
                Employee Experience Survey</div>

              <div id="product-detail-care" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul>
                    <li> Engagement Survey </li>
                    <li> Exit Management survey </li>
                    <li> Training and Assessment Survey </li>
                    <li> Onboarding surveys. </li>
                    <li> Employee Experience Survey </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

       </div>
    )
  }

}

export default Products
