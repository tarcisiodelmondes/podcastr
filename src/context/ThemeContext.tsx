import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';

type ThemeContextDate = {
  theme: string;
  changeTheme: () => void;
};

type ThemeContextProviderProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextDate);

export function ThemeContextProvider({
  children,
  theme,
  setTheme,
}: ThemeContextProviderProps) {
  function changeTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
