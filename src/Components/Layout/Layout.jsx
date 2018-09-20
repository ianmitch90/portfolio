import React, { Component } from 'react'
import Heading from './Header'
import Sticky from 'react-stickynode';



export class Layout extends Component {


  render() {


    return (
      <div className='layout'>
        <Sticky enabled={true} bottomBoundary={1200}>
        <Heading/>
      </Sticky>
        {this.props.children}
        

      </div>
    )
  }
}

export default Layout
