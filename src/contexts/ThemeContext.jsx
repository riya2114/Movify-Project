import React, { createContext, useState } from 'react'

export const ThemeContext=createContext();
const ThemeContextProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
       {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;