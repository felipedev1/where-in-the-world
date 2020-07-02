import styled from 'styled-components'

export const HeaderStyle = styled.header`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 10vh;
  background: #fff;
  box-shadow: 2px 0 0 2px rgba(0, 0, 0, 0.1);
`

export const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 800;
`

export const ToggleTheme = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800; 
  span {
    margin-left: 10px;
  }
`