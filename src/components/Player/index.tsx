import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import styles from './styles.module.scss';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import Head from 'next/head';
import { OpenPlayerContext } from '../../context/OpenPlayer';

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    currentEpisodeIndex,
    episodeList,
    isPlaying,
    isLooping,
    isShuffling,
    hasNext,
    hasPrevious,
    playNext,
    playPrevious,
    clearPlayState,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState,
  } = usePlayer();
  const { isPlayer, togglePlayer } = useContext(OpenPlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  useEffect(() => {
    if (!audioRef.current) return;

    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () =>
      setProgress(Math.floor(audioRef.current.currentTime)),
    );
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) playNext();
    else {
      clearPlayState();
      togglePlayer();
    }
  }

  const [progress, setProgress] = useState(0);

  return (
    <div className={`${styles.playerContainer} ${isPlayer && styles.isMobile}`}>
      <Head>
        <title>Home | Podcast</title>
      </Head>

      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />

          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={!episode ? styles.empty : ''}>
        <div className={styles.progress}>
          <span>{convertDurationToTimeString(progress)}</span>
          <div className={styles.slider}>
            {episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ backgroundColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <div className={styles.emptySlider} />
            )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </div>

        {episode && (
          <audio
            ref={audioRef}
            src={episode.url}
            autoPlay
            onEnded={() => handleEpisodeEnded()}
            loop={isLooping}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={() => setupProgressListener()}
          />
        )}

        <div className={styles.buttons}>
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={() => toggleShuffle()}
            className={isShuffling ? styles.isActive : ''}
          >
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>

          <button type="button" disabled={!episode || !hasPrevious}>
            <img
              src="/play-previous.svg"
              alt="Tocar Anterior"
              onClick={() => playPrevious()}
            />
          </button>

          <button
            type="button"
            disabled={!episode}
            className={styles.playButton}
            onClick={() => togglePlay()}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Pausar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </button>

          <button
            type="button"
            disabled={!episode || !hasNext}
            onClick={() => playNext()}
          >
            <img src="/play-next.svg" alt="Tocar pr??xima" />
          </button>

          <button
            type="button"
            disabled={!episode}
            onClick={() => toggleLoop()}
            className={isLooping ? styles.isActive : ''}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}
