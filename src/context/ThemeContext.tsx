"use client"
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({ children }: { children: ReactNode }): JSX.Element {
    // states
    const [theme, setTheme] = useState<ThemeTypes>(ThemeEnums.LIGHT_THEME)

    // hooks
    const { Provider } = ThemeContext

    // constants
    const ProviderValue: ThemeContextType = { theme, setTheme }

    // effects
    useEffect(() => {
        if (theme === ThemeEnums.DARK_THEME) {
            document.documentElement.classList.add(ThemeEnums.DARK_THEME)
        } else {
            document.documentElement.classList.remove(ThemeEnums.DARK_THEME)
        }
    }, [theme])

    // render
    return (
        <Provider value={ProviderValue}>
            {children}
        </Provider>
    )
}

export enum ThemeEnums {
    LIGHT_THEME = 'light',
    DARK_THEME = 'dark'
}

type ThemeTypes = ThemeEnums.DARK_THEME | ThemeEnums.LIGHT_THEME

export type ThemeContextType = {
    theme: ThemeTypes,
    setTheme: Dispatch<SetStateAction<ThemeTypes>>
}