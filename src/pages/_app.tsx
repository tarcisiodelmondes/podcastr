import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../context/PlayerContext';
import { OpenPlayer } from '../components/OpenPlayer';
import { OpenPlayerContextProvider } from '../context/OpenPlayer';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <OpenPlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <OpenPlayer />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </OpenPlayerContextProvider>
    </PlayerContextProvider>
  );
}

export default MyApp;
