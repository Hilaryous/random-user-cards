/* eslint-disable function-paren-newline */
import React from 'react'
import renderer from 'react-test-renderer'
import Text from '../Text'

describe('Text', () => {
  it('shows the correct snapshot tree for the Text component', () => {
    const tree = renderer.create(
      <Text />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the Text component, italic', () => {
    const tree = renderer.create(
      <Text
        modifier="italic"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the Text component, bold', () => {
    const tree = renderer.create(
      <Text
        modifier="bold"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the Text component, center', () => {
    const tree = renderer.create(
      <Text
        modifier="center"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the Text component, post', () => {
    const tree = renderer.create(
      <Text
        modifier="post"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
