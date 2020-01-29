import React from 'react'
import styled from '@emotion/styled'

const Slide = styled.main`
  max-width: calc(100vh * 4 / 3);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2rem;
`

const Body = styled.article`
  flex-grow: 1;
  width: 100%;
  height: 100vh;
  position: relative;
`

const Footer = styled.footer`
  display: flex;
  flex-shrink: 0;
  font-size: 1.5rem;
  justify-content: space-between;
  text-align: right;
`

export const Layout = ({ children, footer }) => (
  <Slide>
    <Body>{children}</Body>
    <Footer>
      <span>{footer}</span>
      <span>@goblindegook</span>
    </Footer>
  </Slide>
)

const Box = styled.div`
  flex: none;
  min-width: 0;
  width: ${props => props.width || '100%'};
`

const Flex = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
`

export const Split = ({ children }) => {
  const childrenElements = React.Children.toArray(children)
  const total = childrenElements.length

  return (
    <Flex>
      {childrenElements.map((element, idx) => (
        <Box key={idx} width={`${100 / total}%`}>
          {element}
        </Box>
      ))}
    </Flex>
  )
}
