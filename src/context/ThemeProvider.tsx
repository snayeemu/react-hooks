import { ReactNode, createContext, useState } from "react";

type TChildren = { children: ReactNode };

type TThemeContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<TThemeContext | null>(null);

const ThemeProvider = ({ children }: TChildren) => {
  const [dark, setDark] = useState(false);

  const values = {
    dark,
    setDark,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
