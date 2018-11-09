/* eslint-disable function-paren-newline */
import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../Header'

describe('Header', () => {
  it('shows the correct snapshot tree for the Header component', () => {
    const tree = renderer.create(
      <Header />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
