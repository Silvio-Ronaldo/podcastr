import { createContext, ReactNode, useContext, useState } from 'react';

type ThemeContextData = {
    isDarked: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
    children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [isDarked, setIsDarked] = useState(true);

    function toggleTheme() {
        setIsDarked(!isDarked);
    }

    return (
        <ThemeContext.Provider value={{ isDarked, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}
