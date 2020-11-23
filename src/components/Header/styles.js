import styled from 'styled-components'

export const HeaderStyle = styled.header`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 10vh;
  background-color: ${props => props.theme.colors.element};
  box-shadow: 2px 0 0 2px rgba(0, 0, 0, 0.1);
`

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 800;
  margin-right: 10px;

  @media(max-width: 600px) {
    font-size: 20px;
  }
`

export const ToggleTheme = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600; 
  outline: none;
  background: transparent;
  cursor: pointer;
  border: none;

  svg {
    transform: rotateZ(-22deg);
  }

  span {
    margin-left: 1vw;
  }
`