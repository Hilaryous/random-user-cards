/* eslint-disable function-paren-newline */
import React from 'react'
import renderer from 'react-test-renderer'
import Post from '../Post'

describe('Post', () => {
  it('shows the correct snapshot tree for the Post component', () => {
    const tree = renderer.create(
      <Post
        title="foo bar"
        body="This is the body"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
