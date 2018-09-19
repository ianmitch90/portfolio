import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './profile.css'
import Twitter from './svg/twitter.svg'
import Twitch from './svg/twitch.svg'
import Medium from './svg/medium.svg'
import Github from './svg/github.svg'
import facePic from '../../../Assets/images/imgface-min.png'
import Button from '@material-ui/core/Button';
import videoloop from './OKKKK.mp4'
//TODO: so for the intrest hero section: use react spring to toggle a sliding button to terenary reveal current learning or building
export class Profile extends Component {
  render() {
    return (
      <div className= 'profile'>
      <video autoPlay loop muted>
          <source
          src={videoloop} type="video/mp4" />
      </video>
        <div className="profileHeroText">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%" fill='f5f5f5' >
                <rect x="0" y="0" width="100%" height="100%" />
                <text x="50" y="50">all things Ian</text>
              </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" />
          </svg>
        </div>
        <div className='profileHero'>
          <div className='profileDesc'>
            <div className='picContainer'>
              <Avatar className='myPic' alt='Ian smiling.' src={facePic} />
            </div>
            <h1>About Me:</h1>
            <p>Hi there! My name is Ian, and I am a Junior Web Developer based out of Houston, TX.
            My main drive in is creating content that helps others.
            I am currently exploring the educational aspect of being a Web Developer with an amazing community in Houston. 
            I am passionate about contributing to the local and global communities of the LGBT+, Gaming, Developer, and Non-Profits and am always learning, using, and developing new technologies everyday out of my own curiosity.</p> <br/> <h2>Stay in touch by following me below or by visiting my contact page!</h2>
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
