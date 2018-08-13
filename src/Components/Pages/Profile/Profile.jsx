import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './profile.css'
import Twitter from './svg/twitter.svg'
import Twitch from './svg/twitch.svg'
import Medium from './svg/medium.svg'
import Github from './svg/github.svg'
import facePic from '../../../Assets/images/imgface-min.png'
import Button from '@material-ui/core/Button';
//TODO: so for the intrest hero section: use react spring to toggle a sliding button to terenary reveal current learning or building
export class Profile extends Component {
  render() {
    return (
      <div className= 'profile'>
        <div className='profileHero'>
          <div className='profileDesc'>
            <div className='picContainer'>
              <Avatar className='myPic' alt='Ian smiling.' src={facePic} />
            </div>
            <h1>About Me:</h1>
            <p>Hi there! My names Ian, and i am a Junior Web Developer based out of Houston, TX.
            My main drive in creating content is to help others.
            I am currently exploring the Education aspect of being a Web Developer with an amazing community in Houston. 
            I also participate in contributing to the local and global communities of LGBT+, Gaming, Developer, and Non-Profits, in anyway i can large or small. 
            Im always learning, using, and developing in new technologies everyday out of my own curiosity.</p>
          </div>
          <div className='socialButtons' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
              <Button href='https://twitter.com/TheShadyGaymer' className='socialIcons' color='primary' variant='fab' target="_blank" rel="noopener noreferrer">
                <img alt='twiter logo' src={Twitter} />
              </Button>
              <Button href='https://www.twitch.tv/theshadygaymer' className='socialIcons' color='primary' variant='fab' target="_blank" rel="noopener noreferrer">
                <img alt='twitch logo' src={Twitch} />
              </Button>
              <Button href='https://medium.com/@ianmitch90' className='socialIcons' color='primary' variant='fab' target="_blank" rel="noopener noreferrer">
                <img alt='medium logo' src={Medium} />
              </Button>
              <Button href='https://github.com/ianmitch90/' className='socialIcons' color='primary' variant='fab' target="_blank" rel="noopener noreferrer">
                <img alt='github logo' src={Github} />
              </Button>
          </div>
        </div>




      </div>
    )
  }
}

export default Profile
