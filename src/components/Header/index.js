import React, { useContext } from 'react'
import { HeaderStyle, Wrapper, Title, ToggleTheme } from './styles'
import { FaMoon, FaRegMoon } from 'react-icons/fa'
import { ThemeContext } from 'styled-components'

export default function Header(props) {
  const theme = useContext(ThemeContext)

  return (
    <HeaderStyle>
      <Wrapper>
        <Title>Where in the world?</Title>
        <ToggleTheme onClick={props.toggleTheme}>
          {theme.title === 'dark' ? <FaMoon /> : <FaRegMoon />}
          <span>Dark Mode</span>
        </ToggleTheme>
      </Wrapper>
    </HeaderStyle>
  )
}