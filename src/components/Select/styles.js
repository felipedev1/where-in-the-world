import styled from 'styled-components'

export const SelectBox = styled.div`
  position: relative;
  width: 200px;
  padding: 15px 16px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.element};
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  
  select {
    display: none;
  }
`

export const OptionsBox = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: 110%;
  display: ${props => props.open ? 'block' : 'none'};
  border-radius: 8px;
  z-index: 999;
  padding: 8px 0;
  cursor: initial;
  list-style: none;
  background-color: ${props => props.theme.colors.element};
  
  :first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  :last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

export const Option = styled.li`
  padding: 4px 16px;
  width: 100%;
  transition: background-color .2s ease;
  box-shadow: 0;
  cursor: pointer;
  
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`