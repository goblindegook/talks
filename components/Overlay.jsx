import styled from '@emotion/styled'

export const Grid = styled.div`
  height: 100%;
  display: grid;
`

export const Container = styled.div`
  background-color: rgba(51, 51, 51, 0.6);
  color: #fff;
  padding: 2rem;
  text-align: center;
  width: inherit;
  margin: auto 0;
`

export const Overlay = ({ children }) => (
  <Grid>
    <Container>{children}</Container>
  </Grid>
)
