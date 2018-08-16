import React, { Component } from 'react'
import './Landing.css'
import { Parallax, ParallaxLayer } from 'react-spring'
import { CallToSwipe, Trailing } from './CTA/CTAnimation'

// ok so each layer has its own section, points of intrest lie in how im handling my props in Page. more intrestingly is that im using a terinary operator on line 34 to detect if a map generated has an empty string not to render the CallToSwipe component that was imported from CTAnimation

const Page = ({ offset, caption, first, second, third, fourth, fifth, sixth, bgTitle, gradient, onClick, isWelcomePanel, gradientLine }) => (

  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>{bgTitle}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text landingSlideHeader" offset={offset} speed={0.4} >
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradientLine}`} />
        <p>{first}</p>
        <p>{second}</p>
        <p>{third}</p>
        <p>{fourth}</p>
        <p>{fifth}</p>
        <p>{sixth}</p>
        {isWelcomePanel ? <CallToSwipe /> : ''}
      </span>

    </Parallax.Layer>

  </React.Fragment>
)




export class Landing extends Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <div className='Landing'>
        <div className='landingContainer'>

          <Parallax className='heroBackground' ref={ref => (this.parallax = ref)} pages={2}>

            <ParallaxLayer className='heroText' offset={0.1} speed={0} onClick={() => this.parallax.scrollTo(1)} >

              <ParallaxLayer offset={0.1} speed={3.5}>
                <h1>Ian</h1>
              </ParallaxLayer>

              <ParallaxLayer offset={0.3} speed={2}>
                <h1>Mitchell</h1>
              </ParallaxLayer>

              <ParallaxLayer offset={0.5} speed={1.5}>
                <Trailing />
              </ParallaxLayer>

            </ParallaxLayer>

            <ParallaxLayer offset={1}>
              <Parallax className="container" ref="parallax" pages={5} horizontal scrolling={true}>

                <Page offset={0} gradientLine='pinkAccent' gradient="pink" caption="Who I Am" first='Developer' second="&" third="Designer" fourth="-" fifth='to begin:' sixth='swipe or tap' onClick={() => this.scroll(1)} bgTitle='Hey there' isWelcomePanel='things' />

                <Page offset={1} gradientLine='tealAccent' gradient="teal" caption="What I Do" first="" second="Development" third="Education" fourth="Freelance" onClick={() => this.scroll(2)} bgTitle='Career' />

                <Page offset={2} gradientLine='tomatoAccent' gradient="tomato" caption="Web Development Specialties" first="Jr Full Stack Dev" second="JS/HTML/CSS/C#" third="Mongo/PostSQL" fourth="React/Redux/MERN" onClick={() => this.scroll(3)} bgTitle='Skills' />

                <Page offset={3} gradientLine='algaeAccent' gradient="algae" caption="Education" first="University" second="of Houston" third="Computer Science " fourth="- Current" fifth="The Iron Yard" sixth="Full Stack - 2017" onClick={() => this.scroll(4)} bgTitle='School' />

                <Page offset={4} gradientLine='lavenderAccent' gradient="lavender" caption="Contact Me" first="Visit my" second="Contact Page" third="For More" fourth="Information!" onClick={() => this.scroll(0)} bgTitle='Explore!' />

              </Parallax>
            </ParallaxLayer>



          </Parallax>
        </div>
      </div>
    )
  }
}

export default Landing
