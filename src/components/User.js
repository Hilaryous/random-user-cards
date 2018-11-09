// @flow
import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import Card from './Card'
import Text from './Text'
import type { UserType } from '../types/User'

const UserCard = styled(Card)({
  display: 'grid',
  gridTemplateColumns: '106px 1fr',
  gridGap: 20,
  paddingTop: 50,
  paddingBottom: 50,
}, ({ border }) => ({
  border,
}))

const UserInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
})

type Props = {
  currentUserId: string,
  toggleUser: (string) => void,
} & UserType

class User extends PureComponent<Props> {
  handleToggleUser = () => {
    const { id, toggleUser } = this.props
    toggleUser(id)
  }

  render() {
    const { currentUserId, id, avatar, catchPhrase, email, name } = this.props
    return (
      <UserCard border={currentUserId === id ? '1px solid' : 'none'} onClick={this.handleToggleUser}>
        <img alt="User Avatar" src={avatar} />
        <UserInfo>
          <Text modifier="italic">
            {`\u0022${catchPhrase}\u0022`}
          </Text>
          <div>
            <Text modifier="bold">
              {name}
            </Text>
            <Text>
              {email}
            </Text>
          </div>
        </UserInfo>
      </UserCard>
    )
  }
}

export default User
