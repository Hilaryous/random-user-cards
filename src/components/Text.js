// @flow
import styled from 'react-emotion'

const Text = styled('p')({
  fontSize: 13,
  color: '#294762',
  lineHeight: 1.4,
  margin: 0,
},
({
  modifier,
}) => {
  switch (modifier) {
    case 'italic':
      return { fontStyle: 'italic' }
    case 'bold':
      return { fontWeight: 'bold' }
    case 'center':
      return { textAlign: 'center' }
    case 'post':
      return {
        opacity: '0.8',
        lineHeight: '1.5',
      }
    default:
      return {}
  }
})

export default Text
