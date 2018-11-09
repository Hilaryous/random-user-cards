/* eslint-disable function-paren-newline */
import React from 'react'
import renderer from 'react-test-renderer'
import User from '../User'

describe('User', () => {
  it('shows the correct snapshot tree for the User component, selected', () => {
    const tree = renderer.create(
      <User
        currentUserId="1"
        toggleUser={() => {}}
        id="1"
        avatar="foo.bar.com"
        catchPhrase="i'm cool!"
        email="baz@bar.com"
        name="Foo Bar"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the User component, unselected', () => {
    const tree = renderer.create(
      <User
        currentUserId="1"
        toggleUser={() => {}}
        id="3"
        avatar="foo.bar.com"
        catchPhrase="i'm cool!"
        email="baz@bar.com"
        name="Foo Bar"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
