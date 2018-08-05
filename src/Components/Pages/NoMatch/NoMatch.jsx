import React, { Component } from 'react'
import './noMatch.css'
let failArray = [
'https://thumbs.gfycat.com/ExaltedAccomplishedHornedtoad-size_restricted.gif',
'https://thumbs.gfycat.com/AstonishingDentalGermanspitz-size_restricted.gif',
'https://thumbs.gfycat.com/FondAgitatedCanine-size_restricted.gif',
'https://thumbs.gfycat.com/SophisticatedPossibleChupacabra-size_restricted.gif',
'https://thumbs.gfycat.com/MajorThreadbareGraywolf-size_restricted.gif',
'https://thumbs.gfycat.com/FearfulGrandioseBuck-size_restricted.gif',
'https://thumbs.gfycat.com/DeafeningUnsightlyGavial-size_restricted.gif',
'https://thumbs.gfycat.com/RingedMildBlackfish-size_restricted.gif'
]
let failImg = failArray[Math.floor(Math.random() * failArray.length)];

let styles = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${failImg})`,
}

let failReplyArray = [
  'The page your looking for went POOF!', 
  'Uhh.. i think something went wrong', 
  'Oh no! I lost that page!', 
  'Sometimes, its the thought that counts!', 
  'Geez! can i ask Jeevs still?',
  ]
let failReply = failReplyArray[Math.floor(Math.random() * failReplyArray.length)]



export class NoMatch extends Component {
  render() {
    return (
      <div className= 'NoMatchContainer' style= {styles}>
        <div className='nomatch'>
          <div className= 'NoMatchHeadline'>
            <h1 className='flicker-1'>404</h1>
            <h2>Page Not Found</h2>
            <br/>
            {failReply} 
         </div>
        </div>
      </div>
    )
  }
}

export default NoMatch
