import React, { Component } from 'react';
import Nav from './navbar';
import {Accordion, AccordionTab} from 'primereact/accordion';


class Products extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeIndex : ''
    }
  }

  render() {
    return (
       <div className="products">
          <Nav />
          <h3 className="text-center">Products</h3>

          <Accordion activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
            <AccordionTab header="Engagement Survey">
              <ul>
                <li> Engagement Survey </li>
                <li> Exit Management survey </li>
                <li> Training and Assessment Survey </li>
                <li> Onboarding surveys. </li>
                <li> Employee Experience Survey </li>
              </ul>
            </AccordionTab>
            <AccordionTab header="Exit Management Survey">
                <ul>
                  <li> Engagement Survey </li>
                  <li> Exit Management survey </li>
                  <li> Training and Assessment Survey </li>
                  <li> Onboarding surveys. </li>
                  <li> Employee Experience Survey </li>
                </ul>
            </AccordionTab>
            <AccordionTab header="Training and Assessment Survey">
              <ul>
                <li> Engagement Survey </li>
                <li> Exit Management survey </li>
                <li> Training and Assessment Survey </li>
                <li> Onboarding surveys. </li>
                <li> Employee Experience Survey </li>
              </ul>
            </AccordionTab>
            <AccordionTab header="Onboarding Survey">
              <ul>
                <li> Engagement Survey </li>
                <li> Exit Management survey </li>
                <li> Training and Assessment Survey </li>
                <li> Onboarding surveys. </li>
                <li> Employee Experience Survey </li>
              </ul>
            </AccordionTab>
            <AccordionTab header="Employee Experience Survey">
              <ul>
                <li> Engagement Survey </li>
                <li> Exit Management survey </li>
                <li> Training and Assessment Survey </li>
                <li> Onboarding surveys. </li>
                <li> Employee Experience Survey </li>
              </ul>
            </AccordionTab>
          </Accordion>
       </div>
    )
  }

}

export default Products
