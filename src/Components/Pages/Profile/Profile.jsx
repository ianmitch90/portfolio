import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './profile.css'
import facePic from '../../../Assets/images/imgface-min.png'
//TODO: so for the intrest hero section: use react spring to toggle a sliding button to terenary reveal current learning or building
export class Profile extends Component {
  render() {
    return (
      <div className= 'profile'>
        <div className='profileHero'>
          <div className='profileDesc'>
            <h1>About Me:</h1>
            <p>Hi there! My names Ian, and i am a Junior Web Developer based out of Houston, TX.
            My main drive in creating content is to help others.
            I am currently exploring the Education aspect of being a Web Developer with an amazing community in Houston. 
            I also participate in contributing to the local and global communities of LGBT+, Gaming, Developer, and Non-Profits, in anyway i can large or small. 
            Im always learning, using, and developing in new technologies everyday out of my own curiosity.</p>
          </div>
          <div className='picContainer'>
            <Avatar className='myPic' alt='Ian smiling.' src={facePic} />
          </div>

        </div>

        <div className='intrestSection'>
          <div className='intrestHero'>
            <h1>My Intrests:</h1>
            <h2>Currently Learning:</h2>
            <h2>Curently Building:</h2>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
