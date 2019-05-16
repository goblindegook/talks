import styled from '@emotion/styled'

export const Grid = styled.div`
  height: 100%;
  display: grid;
`

export const Container = styled.div`
  background-color: rgba(51, 51, 51, 0.6);
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  padding: 0.78125rem;
  text-align: left;
  width: inherit;
  margin: auto 0 0;
`

export const Caption = ({ children }) => (
  <Grid>
    <Container>{children}</Container>
  </Grid>
)
