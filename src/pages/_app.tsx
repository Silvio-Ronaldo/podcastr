import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { PlayerContextProvider } from '../contexts/PlayerContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';

import { GlobalStyle } from '../styles/global';

import { Wrapper } from '../styles/app';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeContextProvider>
      <PlayerContextProvider>
        <Wrapper>
          <main>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </Wrapper>
      </PlayerContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp
