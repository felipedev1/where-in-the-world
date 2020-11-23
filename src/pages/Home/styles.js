import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'

export const StyledHome = styled.div`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  padding-top: 17vh;
  padding-bottom: 10vh;
`

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 7vh;

  @media(max-width: 600px) {
    flex-direction: column;
    height: 20vh;
  }
`

export const Countries = styled(InfiniteScroll)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: space-between;
  row-gap: 7.5vh;
  column-gap: 20px;

  @media(max-width: 600px) {
    width: 70vw;
    margin: 0 auto;
    grid-template-columns: 1fr;
    justify-content: center;
    column-gap: 0px;
  }
`