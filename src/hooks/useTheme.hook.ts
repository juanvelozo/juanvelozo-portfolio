"use client"

import { ThemeContext, ThemeContextType, ThemeEnums } from "@/context/ThemeContext"
import { useContext, createElement, ReactNode } from "react"
import { LampIcon } from "../../public/assets/svg/theme/Lamp"
import { LampOffIcon } from "../../public/assets/svg/theme/LampOff"

 /**
 * @description this is a hook help us to access to the value of the theme and the Dispatch method
*/
export function useTheme(): ThemeContextType {
    const context: ThemeContextType | null = useContext(ThemeContext)
    if (!context || typeof context == "undefined") {
        throw new Error("ThemeContext should be used on ThemeContextProvider!")
    }
    return context
}

// component
export default function ThemeSwitcher(): JSX.Element {
    const { theme, setTheme } = useTheme()

    function SwitchTheme() {
        if (theme == ThemeEnums.DARK_THEME) {
            setTheme(ThemeEnums.LIGHT_THEME)
        } else {
            setTheme(ThemeEnums.DARK_THEME)
        }
    }

    return createElement("div",
        {
            className: "w-16 h-16 rounded-full top-16 right-2 md:top-24 md:right-5 flex items-center justify-center cursor-pointer",
            onClick: SwitchTheme
        },
        createElement("span",
            {
                className: "select-none text-center text-neutral-950 dark:text-slate-100 font-bold transition-colors delay-150 ease-in"
            },
            ThemeIcon[theme]
        )
    )
}

type ThemeIconType ={
    [icon in ThemeEnums]:ReactNode
}

const ThemeIcon:ThemeIconType ={
[ThemeEnums.DARK_THEME]: LampIcon(),
[ThemeEnums.LIGHT_THEME]:LampOffIcon()
}