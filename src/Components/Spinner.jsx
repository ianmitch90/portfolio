import React, { Component } from 'react'
import '../styles/css/Spinner.css'
export class Spinner extends Component {
  render() {
    return (
      <div className='spinnercontainer'>
            <div className="battery">
                <div className="liquid"></div>
            </div>

            <h5>Loading</h5>
      </div>
    )
  }
}

export default Spinner
