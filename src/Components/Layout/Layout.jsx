import React, { Component } from 'react'
import Heading from './Header'

export class Layout extends Component {


  render() {


    return (
      <div>
        <Heading/>

        {this.props.children}
        

      </div>
    )
  }
}

export default Layout
