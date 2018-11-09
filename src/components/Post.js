// @flow
import React from 'react'
import Text from './Text'
import Header from './Header'
import type { PostType } from '../types/Post'

type Props = PostType

const Post = ({
  title,
  body,
}: Props) => (
  <div>
    <Header>
      {title}
    </Header>
    <Text modifier="post">
      {body}
    </Text>
  </div>
)

export default Post
