// @flow
import __ from 'ramda/src/__'
import compose from 'ramda/src/compose'
import map from 'ramda/src/map'
import merge from 'ramda/src/merge'
import path from 'ramda/src/path'
import pick from 'ramda/src/pick'
import prop from 'ramda/src/prop'
import slice from 'ramda/src/slice'
import sort from 'ramda/src/sort'

const getRandomItem = n => arr => compose(
  slice(0, n),
  sort(() => 0.5 - Math.random()),
)(arr)

const getUserObj = baseObj => compose(
  pick(['id', 'avatar', 'catchPhrase', 'email', 'name']),
  merge(__, {
    catchPhrase: path(['company', 'catchPhrase'], baseObj),
    avatar: `https://api.adorable.io/avatars/106/${prop('email', baseObj)}.png`,
  }),
)(baseObj)

export const getUsers = (arr: Array<{}>, n: number) => compose(
  map(getUserObj),
  getRandomItem(n),
)(arr)

export const getPosts = (arr: Array<{}>, n: number) => compose(
  map(pick(['id', 'title', 'body'])),
  getRandomItem(n),
)(arr)

export default undefined
