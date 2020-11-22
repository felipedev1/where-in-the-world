import styled from 'styled-components'

export const StyledCard = styled.div`

background-color: ${props => props.theme.colors.element};
  min-width: 250px;
  min-height: 330px;
  box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow: hidden;
`

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 1.5rem 2.5rem;

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 8px;
    font-size: 2rem;
  }

  ul {
    list-style: none;
  }

  ul li, p, span {
    line-height: 2rem;
  }
`