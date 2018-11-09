/* eslint-disable function-paren-newline */
import React from 'react'
import renderer from 'react-test-renderer'
import Card from '../Card'

describe('Card', () => {
  it('shows the correct snapshot tree for the Card component', () => {
    const tree = renderer.create(
      <Card />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
