/* eslint-disable function-paren-newline */
import React from 'react'
import renderer from 'react-test-renderer'
import CardGrid from '../CardGrid'

describe('CardGrid', () => {
  it('shows the correct snapshot tree for the CardGrid component', () => {
    const tree = renderer.create(
      <CardGrid />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
