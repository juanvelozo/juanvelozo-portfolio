"use client"
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export const MenuContext = createContext<MenuContextType | null>(null)

export default function MenuContextProvider({ children }: { children: ReactNode }): JSX.Element {
    // states
    const [open, setOpen] = useState<boolean>(true)

    // hooks
    const { Provider } = MenuContext

    // constants
    const ProviderValue: MenuContextType = { open, setOpen }

    // render
    return (
        <Provider value={ProviderValue}>
            {children}
        </Provider>
    )
}

export type MenuContextType = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}