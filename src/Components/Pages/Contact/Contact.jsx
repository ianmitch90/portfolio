import React, { Component } from 'react'
import './contact.css'
import Button from '@material-ui/core/Button';
import { Mail , ChevronRight, CloudDownload, DateRange, AssignmentInd} from '@material-ui/icons/'
import resume from '../../../Assets/IanMitchell.pdf'



export class Contact extends Component {
  render() {
    return (
      <div className='contactContainer'>
        <h1>Stay In Touch!</h1>
        <div className='contactMain'>
          <h2>Email:</h2>
            <Button variant='fab' rel="noopener noreferrer" href= 'mailto:ianmitch90@gmail.com'>
              <Mail/>
            </Button>
          <h2>Phone:</h2>
            <p>(832) 704-6499</p>
          <h2>Linkedn:</h2>
          <Button variant='fab' color= 'inherit' className= 'goButtonGreen' target="_blank" rel="noopener noreferrer" href= 'https://www.linkedin.com/in/ianmitch90/'>
              <ChevronRight/>
            </Button>
          <h2>GitHub:</h2>
          <Button variant='fab' color= 'inherit' className= 'goButtonGreen' target="_blank" rel="noopener noreferrer" href= 'https://github.com/ianmitch90'>
              <ChevronRight/>
            </Button>

          <div className='contactButtonsContainer'>
            <Button variant='extendedFab' color='primary' className='contactButtons' href={resume} download='Ian Mitchell'>
              <CloudDownload /> <p>Resume</p>
            </Button>
            <Button variant='extendedFab' color='inherit' className='contactButtons' target="_blank" rel="noopener noreferrer" href='https://calendly.com/ianmitch90'>
              <DateRange /> <p>Schedule</p>
            </Button>
            <Button variant='extendedFab' color='secondary' className='contactButtons'>
              <AssignmentInd /> <p>Hireing?</p>
            </Button>
          </div>
        </div>
      </div>
      

    )
  }
}

export default Contact
