import React from 'react'
import Banner from './Banner'

describe('<Banner />', () => {
  it('renders', () => {
    cy.mount(<Banner />)
  })
})