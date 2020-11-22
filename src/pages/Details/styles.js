import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledDetails = styled.div`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  padding-top: 20vh;
`

export const BackButton = styled(Link)`
  padding: 10px 30px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.element};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  svg {
    transform: translateY(2.5px);
  }

  span {
    margin-left: 10px;
  }
`

export const CountryDiv = styled.div`
  margin-top: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40vw;
    height: 50vh;
    /* object-fit: cover; */
  }
`

export const CountryInfo = styled.div`
  flex: 1;
  margin-left: 8vw;
  font-size: 16px;

  h2 {
    font-size: 32px;
    margin-bottom: 5vh;
  }

  ul {
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;

    li {
      max-width: 50%;
      margin-bottom: 10px;
      margin-right: 10px;
    }
  }
`

export const BorderCountries = styled.div`
  max-width: 100%;
  margin-top: 9vh;

  strong {
    margin-right: 10px;
  }
`

export const BorderCountryLink = styled(Link)`
  display: inline-block;
  padding: 5px 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.colors.element};
  margin-bottom: 10px;

  & + & {
    margin-left: 10px;
  }
`