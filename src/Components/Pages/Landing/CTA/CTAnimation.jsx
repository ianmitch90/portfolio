import React from 'react'
import { Keyframes, animated } from 'react-spring'
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs'
import { KeyboardArrowRight, ArrowDropDown } from '@material-ui/icons/'

const Container = Keyframes.Spring(async next => {
    while (true) {
        await next({
            from: { radians: 0, color: '#247BA0' },
            to: { radians: 2 * Math.PI }
        })
    }
})


class CallToSwipe extends React.PureComponent {
    
    state = { items: ['item1', 'item2', 'item3', 'item4', 'item5'] }

  render() {
    const { items } = this.state
    const Content = ({ radians, color }) =>
      this.state.items.map((_, i) => (
        <animated.svg
        className='arrows'
        key={i}
        style={{
            width: 55,
            height: 55 ,
            willChange: 'transform',
            transform: radians.interpolate(r => `translate3d(${1.4 * Math.sin(r + i * 2 * Math.PI / 5)}px, 0, 0)`)
          }}
          viewBox="0 0 400 400">
          <animated.g fill={color} fillRule="evenodd">
            <KeyboardArrowRight/>
          </animated.g>
        </animated.svg>
      ))
    return (
        <div style={{ position: 'relative' }}>
            <Container reset native keys={items} impl={TimingAnimation} config={{ duration: 2000, easing: Easing.linear }}>
                {Content}
            </Container>
        </div>
    )
  }
}


const TrailingContainer = Keyframes.Spring(async next => {
    while (true) {
        await next({
            from: { radians: 0, color: '#247BA0' },
            to: { radians: 2 * Math.PI }
        })
    }
})

export default class Trailing extends React.PureComponent {
    state = { items: ['item1', 'item2', 'item3'] }
  render() {
    const { items } = this.state
    const TrailingContent = ({ radians, color }) =>
      this.state.items.map((_, i) => (
        <animated.svg
        className='arrows'
        key={i}
        style={{
            width: 40,
            height: 40 ,
            willChange: 'transform',
            transform: radians.interpolate(r => `translate3d( 0, ${1.4 * Math.sin(r + i * 2 * Math.PI / 5)}px, 0)`)
          }}
          viewBox="0 0 400 400">
          <animated.g fill={color} fillRule="evenodd">
            <ArrowDropDown/>
          </animated.g>
        </animated.svg>
      ))
    return (
        <div style={{ position: 'relative' }}>
            <TrailingContainer reset native keys={items} impl={TimingAnimation} config={{ duration: 2000, easing: Easing.linear }}>
                {TrailingContent}
            </TrailingContainer>
        </div>
    )
  }
}


export { CallToSwipe, Trailing }
