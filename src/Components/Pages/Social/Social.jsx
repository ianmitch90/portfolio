import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './social.css'
import Twitter from './svg/twitter.svg'
import Twitch from './svg/twitch.svg'
import Medium from './svg/medium.svg'
import Github from './svg/github.svg'

export class Social extends Component {
  render() {
    return (
      <div className='socialContainer topographyGradient'>
       <div className='socialContent'>
          <div className='socialButtonsContainer'>
            <div className='socialHeroImage'>
              <div className='socialHeroText'>
                  <h1>Follow <br/> My <br/> Journey!</h1>
              </div>
            </div>
          </div>
          <div className='socialIconsContainer'>
            <div className='socialRow'>
              <Button href='https://twitter.com/TheShadyGaymer' className='socialIcons' color='primary' variant='fab' target="_blank" rel="noopener noreferrer">
                  <img src={Twitter}/>
                </Button>
              <Button href='https://www.twitch.tv/theshadygaymer' className='socialIcons' color='primary' variant='fab' target="_blank" rel="noopener noreferrer">
                  <img src={Twitch}/>
                </Button>
            </div>
            <div className='socialRow'>
              <Button href='https://medium.com/@ianmitch90' className='socialIcons' color='primary' variant='fab' target="_blank" rel="noopener noreferrer">
                  <img src={Medium}/>
                </Button>
              <Button href='https://github.com/ianmitch90/' className='socialIcons' color='primary' variant='fab' target="_blank" rel="noopener noreferrer">
                  <img src={Github}/>
                </Button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Social
