import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../context/PlayerContext';
import { OpenPlayer } from '../components/OpenPlayer';
import { OpenPlayerContextProvider } from '../context/OpenPlayer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
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
