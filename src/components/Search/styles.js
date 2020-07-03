import styled from 'styled-components'


export const SearchGroup = styled.div`
  width: 400px;
  position: relative;

  svg {
    position: absolute;
    top: 15px;
    left: 5%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px 30px 15px 50px;
  border-radius: 5px;
  border: none;
  background-color: #FFF;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  font-size: 1.6rem;
  
  :focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }
`