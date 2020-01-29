import React from 'react'

interface HelloProps {
  name: string
}

function Hello(props: HelloProps) {
  return <>Hello, {props.name}</>
}
