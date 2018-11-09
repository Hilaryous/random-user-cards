// @flow
import React, { PureComponent } from 'react'
import map from 'ramda/src/map'
import User from './User'
import Posts from './Posts'
import CardGrid from './CardGrid'
import type { UserType } from '../types/User'
import { getUsers } from '../utils'

type Props = {}

type State = {
  error: ?{
    message: '',
  },
  isLoaded: boolean,
  users: Array<UserType>,
  currentUserId: string,
}

class Users extends PureComponent<Props, State> {
  state = {
    isLoaded: false,
    users: [],
    currentUserId: '',
    error: null,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(() => ({
            isLoaded: true,
            users: getUsers(result, 3),
          }))
        },
        (error) => {
          this.setState(() => ({
            isLoaded: true,
            error,
          }))
        },
      )
  }

  toggleUser = (id: string) => {
    this.setState(({ currentUserId }) => ({
      currentUserId: currentUserId !== id ? id : '',
    }))
  }

  render() {
    const { currentUserId, error, isLoaded, users } = this.state
    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>
      )
    } if (!isLoaded) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <CardGrid>
        { map(({ avatar, catchPhrase, email, id, name }) => (
          <User
            avatar={avatar}
            catchPhrase={catchPhrase}
            currentUserId={currentUserId}
            email={email}
            id={id}
            key={id}
            name={name}
            toggleUser={this.toggleUser}
          />
        ), users)}
        <Posts userId={currentUserId} />
      </CardGrid>
    )
  }
}

export default Users
