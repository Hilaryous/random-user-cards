/* eslint-disable function-paren-newline */
import React from 'react'
import renderer from 'react-test-renderer'
import Users from '../Users'

describe('Users', () => {
  it('shows the correct snapshot tree for the Users component, loading', () => {
    const tree = renderer.create(
      <Users />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
