// @flow
import styled from 'react-emotion'

const CardGrid = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 350px)',
  gridGap: 20,
  padding: 0,
  justifyContent: 'center',
})

export default CardGrid
