import React, { Component } from 'react'
import './Landing.css'
import { Parallax, ParallaxLayer } from 'react-spring'


const Page = ({ offset, caption, first, second, third, fourth, fifth, sixth, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
        <p>{third}</p>
        <p>{fourth}</p>
        <p>{fifth}</p>
        <p>{sixth}</p>
      </span>
    </Parallax.Layer>
  </React.Fragment>
)




export class Landing extends Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <div className= 'Landing'>
        <div className= 'landingContainer'>
        
            <Parallax className='heroBackground' ref={ref => (this.parallax = ref)} pages={2}>

            <ParallaxLayer className='heroText' offset={0.1} speed={0} >
                
                <ParallaxLayer offset={0.1} speed={4.5}>
                  <h1>Ian</h1>
                </ParallaxLayer>

                <ParallaxLayer offset={0.3} speed={2}>
                  <h1>Mitchell</h1>
                </ParallaxLayer>
            </ParallaxLayer>

            <ParallaxLayer offset={1}>
                <Parallax className="container" ref="parallax" pages={5} horizontal scrolling={true}>
                    <Page className="imgME" offset={0} gradient="pink" caption="Who I Am" first="Ian Mitchell" second="Developer" third="&" fourth="Designer" onClick={() => this.scroll(1)}/>
                    <Page offset={1} gradient="teal" caption="What I Do" first="" second="Development" third="Education" fourth="Freelance" onClick={() => this.scroll(2)} />
                    <Page offset={2} gradient="tomato" caption="Web Development Specialties" first="Jr Full Stack Dev" second="JS/HTML/CSS/C#" third="Mongo/PostSQL" fourth="React/Redux/MERN"onClick={() => this.scroll(3)}/>
                  <Page offset={3} gradient="algae" caption="Education" first="University" second="of Houston" third="Computer Science " fourth="- Current" fifth ="The Iron Yard" sixth="Full Stack - 2017"onClick={() => this.scroll(4)}/>
                    <Page offset={4} gradient="lavender" caption="Contact Me" first="Visit my" second="Contact Page" third="For More" fourth="Information!" onClick={() => this.scroll(0)}/>
                    </Parallax>
            </ParallaxLayer>


           
        </Parallax>
        </div>
      </div>
    )
  }
}

export default Landing
