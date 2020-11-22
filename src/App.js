import React from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/globalStyles'
import Header from './components/Header'
import Routes from './routes'
import light from './styles/theme/light';
import dark from './styles/theme/dark';
import UsePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = UsePersistedState('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
