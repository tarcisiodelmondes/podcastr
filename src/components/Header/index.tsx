import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './styles.module.scss';

export function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <div>
        {theme === 'light' ? (
          <BiMoon
            className={styles.iconThemeStyle}
            onClick={() => changeTheme()}
            fontSize={30}
            cursor="pointer"
          />
        ) : (
          <BiSun
            className={styles.iconThemeStyle}
            onClick={() => changeTheme()}
            fontSize={30}
            cursor="pointer"
          />
        )}
      </div>
    </header>
  );
}
