/* eslint-disable function-paren-newline */
import React from 'react'
import renderer from 'react-test-renderer'
import Posts from '../Posts'

describe('Posts', () => {
  it('shows the correct snapshot tree for the Posts component, default', () => {
    const tree = renderer.create(
      <Posts currentUserId="" />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the Posts component, default', () => {
    const tree = renderer.create(
      <Posts currentUserId="1" />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
