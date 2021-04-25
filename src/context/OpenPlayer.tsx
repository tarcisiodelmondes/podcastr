import { createContext, useState } from 'react';

type OpenPlayerContextData = {
  isPlayer: boolean;
  togglePlayer: () => void;
};

export const OpenPlayerContext = createContext({} as OpenPlayerContextData);

export function OpenPlayerContextProvider({ children }) {
  const [isPlayer, setIsPlayer] = useState(false);

  function togglePlayer() {
    setIsPlayer(!isPlayer);
  }

  return (
    <OpenPlayerContext.Provider
      value={{
        isPlayer,
        togglePlayer,
      }}
    >
      {children}
    </OpenPlayerContext.Provider>
  );
}
