import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type ThemeContextData = {
    isDarked: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
    children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [isDarked, setIsDarked] = useState(false);

    const toggleTheme = useCallback(() => {
        setIsDarked(!isDarked);
    }, [isDarked]);

    return (
        <ThemeContext.Provider value={{ isDarked, toggleTheme }}>
            <ThemeProvider theme={isDarked ? dark : light}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}
