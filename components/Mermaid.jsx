import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { mermaidAPI } from 'mermaid'

const Diagram = styled.div`
  width: 80vw;
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 0.8rem;

  & svg {
    width: 100% !important;
    min-height: 30vh;
  }
`

export function Mermaid({ className, content, id, options = {} }) {
  const [diagram, setDiagram] = useState(null)

  useEffect(() => {
    mermaidAPI.initialize(options)
    mermaidAPI.render(id, content, setDiagram)
  }, [id, content])

  if (!diagram) {
    return <>Loading</>
  }

  return (
    <Diagram
      className={className}
      dangerouslySetInnerHTML={{ __html: diagram }}
    />
  )
}
