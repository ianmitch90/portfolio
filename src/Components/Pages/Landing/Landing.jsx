import React, { Component } from 'react'
import '../../../styles/css/Landing.css'
import { Parallax, ParallaxLayer } from 'react-spring'
import face from '../../../Assets/images/imgface-min.png'

const Page = ({ offset, caption, first, second, third, fourth, gradient, onClick }) => (
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
      <Parallax ref={ref => (this.parallax = ref)} pages={2}>
          <ParallaxLayer offset={0.2} speed={0.23}>
                <h1>Ian</h1>
          </ParallaxLayer>
          
          <ParallaxLayer offset={0.5} speed={0.5}>
                <h1>Mitchell</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} speed={1}>
                <div className="servingFace"/> 
          </ParallaxLayer>


          <ParallaxLayer offset={1}>
            <div className ='snapshotContainer'>
              <Parallax className="container" ref="parallax" pages={5} horizontal scrolling={true}>
                 <Page className="imgME" offset={0} gradient="pink" caption="Who I Am" first="Ian Mitchell" second="Developer" third="&" fourth="Designer" onClick={() => this.scroll(1)} />
                  <Page offset={1} gradient="teal" caption="What I Do" first="" second="Development" third="Education" fourth="Freelance" onClick={() => this.scroll(2)} />
                  <Page offset={2} gradient="tomato" caption="Web Development Specialties" first="Jr Full Stack Dev" second="JS/HTML/CSS/C#" third="Mongo/PostSQL" fourth="React/Redux/MERN"onClick={() => this.scroll(3)} />
                  <Page offset={3} gradient="algae" caption="Education" first="University of Houston" second="Computer Science - Current" third="The Iron Yard" fourth="Fullstack Web - 2017" onClick={() => this.scroll(4)} />
                  <Page offset={4} gradient="lavender" caption="Contact Me" first="ContactFormButton" second="Linkedn" third="GitHub" fourth="DetailedInfo" onClick={() => this.scroll(0)} />
                  </Parallax>
              </div>
          </ParallaxLayer>
      </Parallax>
      </div>
      </div>
    )
  }
}

export default Landing
