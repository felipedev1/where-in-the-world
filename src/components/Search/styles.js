import styled from 'styled-components'


export const SearchGroup = styled.div`
  width: 28vw;
  position: relative;

  @media(max-width: 600px) {
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px 30px 15px 50px;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.theme.colors.element};
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  font-size: 1.6rem;
  
  :focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }
`