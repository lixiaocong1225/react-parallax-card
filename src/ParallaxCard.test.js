import React from 'react'
import ReactDOM from 'react-dom'
import ParallaxCard from './ParallaxCard.js'

describe('ParallaxCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ParallaxCard label='label'>hello</ParallaxCard>, div)
  })
})
