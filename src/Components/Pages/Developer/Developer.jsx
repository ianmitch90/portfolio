import React, { Component } from 'react'
import './developer.css'
import {Parallax} from 'react-spring'
import algorithmIcon from './svg/algorithm.svg'
import browserIcon from './svg/browser.svg'
import codingIcon from './svg/coding.svg'
import dataIcon from './svg/data.svg'
import serverIcon from './svg/hosting.svg'
import settingIcon from './svg/setting.svg'
import devCodeIcon from './svg/web-design.svg'




export class Developer extends Component {


  render() {
    return (
      <div className='devContainer' >
      <Parallax ref={ref => (this.parallax = ref)} pages={4} className='devMainBG'>
        
        <Parallax.Layer offset={1} speed={1} className='devMiddleBG' />
        <Parallax.Layer offset={2} speed={1} className='devBottomBG' />
        <Parallax.Layer offset={0} speed={0} factor={3} className='devScreenBG' />


        <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img alt='' src={algorithmIcon} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img alt='' src={serverIcon} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </Parallax.Layer>

        <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img alt='' src={settingIcon} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />

        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img alt='' src={settingIcon} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img alt='' src={dataIcon} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </Parallax.Layer>

        <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img alt='' src={codingIcon} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img alt='' src={algorithmIcon} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img alt='' src={codingIcon} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </Parallax.Layer>

        <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img alt='' src={browserIcon} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img alt='' src={settingIcon} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </Parallax.Layer>

          <Parallax.Layer offset={3} speed={-0.2} className='devWorkBG' style={{ pointerEvents: 'none' }}>
      
        </Parallax.Layer>

        <Parallax.Layer
            offset={2}
            speed={1}>
            <h1>Education & Experience:</h1>


        </Parallax.Layer>

        <Parallax.Layer 
          offset={0}
          speed={0.2}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h1>Development</h1>

          <Parallax.Layer 
            offset={0.1}
            speed={0.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>My Skills, Growth</h2>
          </Parallax.Layer>
          <Parallax.Layer 
            offset={0.2}
            speed={0.3}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>& Projects</h2>
          </Parallax.Layer>
        </Parallax.Layer>
        

        <Parallax.Layer
          className= 'languagesContainer'
          offset={.7}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <img alt='' src={devCodeIcon}/>
          <h1>Languages:</h1>

          
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <Parallax.Layer>
            h1
          </Parallax.Layer>
        </Parallax.Layer>

      </Parallax>

      
      </div>
    )
  }
}

export default Developer
