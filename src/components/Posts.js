// @flow
import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import map from 'ramda/src/map'
import Card from './Card'
import Post from './Post'
import Text from './Text'
import type { PostType } from '../types/Post'
import { getPosts } from '../utils'

const PostsContainer = styled(Card)({
  gridColumn: '1 / span 3',
}, ({ modifier }) => {
  switch (modifier) {
    case 'withPosts':
      return {
        paddingTop: 40,
        paddingBottom: 80,
      }
    default:
      return {}
  }
})

type Props = {
  userId: string,
}

type State = {
  error: ?{
    message: string,
  },
  isLoaded: boolean,
  posts: Array<PostType>
}

class Posts extends PureComponent<Props, State> {
  state = {
    error: null,
    isLoaded: false,
    posts: [],
  };

  componentDidUpdate(prevProps: Props) {
    const { userId } = this.props
    const { userId: prevUserId } = prevProps
    if (userId !== prevUserId) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState(() => ({
              isLoaded: true,
              posts: getPosts(result, 5),
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
  }

  render() {
    const { error, isLoaded, posts } = this.state
    const { userId } = this.props
    const hasPosts = posts.length
    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>
      )
    } if (userId && !isLoaded) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <PostsContainer modifier={hasPosts ? 'withPosts' : null}>
        { hasPosts ? (
          map(({ id, title, body }) => (
            <Post
              title={title}
              body={body}
              key={id}
            />
          ), posts)
        ) : (
          <Text modifier="center">
            Click on a card to view five of thier posts
          </Text>
        )}
      </PostsContainer>
    )
  }
}

export default Posts
