import React, { Component } from 'react'
import Footer from './Footer'
import Heading from './Header'

export class Layout extends Component {
  constructor(){
    super()
  }

  render() {


    return (
      <div>
        <Heading/>

        {this.props.children}
        
        <Footer/>
      </div>
    )
  }
}

export default Layout
