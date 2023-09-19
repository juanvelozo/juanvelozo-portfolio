"use client"

import { NavbarRoutes, RoutesLabel, routesArray } from "@/constants/routes"
import { MenuContext, MenuContextType } from "@/context/MenuContext"
import { useContext, createElement } from "react"

/**
* @description this is a hook help us to access to the value of the theme and the Dispatch method
*/
export function useMenu(): MenuContextType {
    const context: MenuContextType | null = useContext(MenuContext)
    if (!context || typeof context == "undefined") {
        throw new Error("MenuContext should be used on MenuContextProvider!")
    }
    return context
}

// component
export function MenuButton(): JSX.Element {
    // hooks
    const { open, setOpen } = useMenu()

    // function
    function handleOpen(): void {
        setOpen(prev=>!prev)
    }
    // render
    return createElement("div",
        {
            onClick: handleOpen,
            className: "absolute bg-neutral-950 z-50 dark:bg-white w-16 h-16 rounded-full top-2 right-2 md:top-5 md:right-5 flex items-center justify-center cursor-pointer"
        },
        createElement("span",
            {
                className: "select-none text-center dark:text-neutral-950 text-slate-100 font-bold transition-all duration-75 ease-in"
            },
            open ? "close" : "open"
        )
    )
}

export function Menu(): JSX.Element {
    // hooks
    const { open, setOpen } = useMenu()

    // function
      function handleOpen(): void {
        setOpen( prev => !prev)
    }

    // constants
    const hoverColors = ["hover:bg-stone-600","hover:bg-sky-700","hover:bg-orange-600","hover:bg-indigo-600","hover:bg-emerald-600"] as const
    // render
    return createElement("div",
        {
            className: `absolute ${open ? "translate-y-0" : "translate-y-96"} transition-transform w-full bottom-0 h-[40hv] md:h-[30vh] bg-red-400 bg-neutral-950 dark:bg-stone-100 rounded-t-xl `,
        },
        createElement("ul",
            {
                className: "flex flex-col md:flex-row space-y-1 md:space-y-0 items-center justify-center w-full h-full overflow-clip rounded-t-xl" 
            },
            routesArray.map((el, i) =>
                createElement("li",
                    {
                        key: i,
                        onClick: handleOpen,
                        className: `select-none dark:text-neutral-950 text-slate-100 font-bold transition-all duration-75 ease-in cursor-pointer group ${hoverColors[i]} h-min md:h-full w-full md:w-1/5 flex items-center justify-start relative overflow-clip`
                    },
                    
                        createElement("span",
                        {key:i+2,
                            className:"whitespace-nowrap p-2 text-3xl md:text-4xl text-start xl:text-center uppercase md:transform md:-rotate-90 h-fit group-hover:text-slate-100 "
                        },
                        RoutesLabel[el.routeName as NavbarRoutes]
                    ),
                )
            )
        )
    )
}