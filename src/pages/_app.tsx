import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../context/PlayerContext';
import { OpenPlayer } from '../components/OpenPlayer';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <OpenPlayer />
          <Component {...pageProps} />
        </main>
        <div className={styles.isMobile}>
          <Player />
        </div>
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;
