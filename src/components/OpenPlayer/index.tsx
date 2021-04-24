import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { usePlayer } from '../../context/PlayerContext';
import { Player } from '../Player';

import styles from './styles.module.scss';

export function OpenPlayer() {
  const [isPlayer, setIsPlayer] = useState(false);
  const { isPlaying } = usePlayer();

  function togglePlayer() {
    setIsPlayer(!isPlayer);
  }

  return (
    <>
      {isPlaying && (
        <div className={styles.isMobile}>
          <div className={styles.openPlayer} onClick={() => togglePlayer()}>
            <img src="/playing.svg" alt="Ir pro player" />
          </div>
          {isPlayer && (
            <div className={styles.player}>
              <Player />
              <div className={styles.close} onClick={() => togglePlayer()}>
                <AiOutlineClose color="var(--white)" />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
