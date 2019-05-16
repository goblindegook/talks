import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { mermaidAPI } from 'mermaid'

const Diagram = styled.div`
  width: 80vw;
  height: 70vh;
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 1rem;

  & svg {
    max-width: 100% !important;
    max-height: 100%;
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
