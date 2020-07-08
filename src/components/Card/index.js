import React from 'react'
import { StyledCard } from './styles'

export default function Card(props) {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  )
}
