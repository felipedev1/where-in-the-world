import React from 'react'
import { HeaderStyle, Wrapper, Title, ToggleTheme } from './styles'
import { FaRegMoon } from 'react-icons/fa'

export default function Header() {
  return (
    <HeaderStyle>
      <Wrapper>
        <Title>Where in the world?</Title>
        <ToggleTheme>
          <FaRegMoon />
          <span>Dark Mode</span>
        </ToggleTheme>
      </Wrapper>
    </HeaderStyle>
  )
}