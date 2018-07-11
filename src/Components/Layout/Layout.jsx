import React, { Component } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

export class Layout extends Component {
  constructor(){
    super()
  }

  render() {


    return (
      <div>
        <NavBar/>

        {this.props.children}
        
        <Footer/>
      </div>
    )
  }
}

export default Layout
