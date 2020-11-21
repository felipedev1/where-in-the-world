import styled from 'styled-components'

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
`

export const Countries = styled.div`
  width: 100%;
  margin-top: 7vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: space-between;
  row-gap: 60px;
  column-gap: 20px;

  /* > div {
    margin: 0 10px 70px 10px;
  } */
`