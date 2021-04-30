import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { PlayerContextProvider } from '../contexts/PlayerContext';
import { ThemeContextProvider, useTheme } from '../contexts/ThemeContext';

import { GlobalStyle } from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import { Wrapper } from '../styles/app';

function MyApp({ Component, pageProps }) {
  const { isDarked } = useTheme();

  const theme = isDarked ? dark : light;

  return (
    <ThemeContextProvider>
      <PlayerContextProvider>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <main>
              <GlobalStyle />
              <Header />
              <Component {...pageProps} />
            </main>
            <Player />
          </Wrapper>
        </ThemeProvider>
      </PlayerContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp
