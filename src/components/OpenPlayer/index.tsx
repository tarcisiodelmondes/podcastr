import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { OpenPlayerContext } from '../../context/OpenPlayer';
import { usePlayer } from '../../context/PlayerContext';

import styles from './styles.module.scss';

export function OpenPlayer() {
  const { isPlaying } = usePlayer();
  const { isPlayer, togglePlayer } = useContext(OpenPlayerContext);

  return (
    <>
      {isPlaying && (
        <div className={styles.isMobile}>
          <div className={styles.openPlayer} onClick={() => togglePlayer()}>
            <img src="/playing.svg" alt="Ir pro player" />
          </div>
          {isPlayer && (
            <div className={styles.close} onClick={() => togglePlayer()}>
              <AiOutlineClose color="var(--white)" />
            </div>
          )}
        </div>
      )}
    </>
  );
}
