import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  /*  each 1rem will be 10px to 16px */
  font-size: 62.5%;
}

html, body {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
}

body {
  position: relative;
  max-width: 100vw;
  min-height: 100vh;
  font-size: 1.6rem;
  overflow-x: hidden;
}
`

export default GlobalStyle