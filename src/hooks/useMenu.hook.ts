"use client"

import { NavbarRoutes, RoutesLabel, routesArray } from "@/constants/routes"
import { MenuContext, MenuContextType } from "@/context/MenuContext"
import { usePathname, useRouter } from "next/navigation"
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
    const pathname=usePathname()
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
    const pathname=usePathname()
    const {push}=useRouter()
    // function
    function handleOpen(url: string): void {
        push(url)
        setOpen( prev => !prev)
    }

    function CheckIsActive(index:number) {
        if (routesArray[index].routePath === '/' && pathname !== '/') return false
        return pathname.includes(routesArray[index].routePath)
    }

    
    // render
    return createElement("div",
        {
            className: `absolute ${open ? "translate-y-0" : "translate-y-96"} transition-transform w-full bottom-0 h-[40hv] md:h-[30vh] bg-stone-200 dark:bg-stone-100 rounded-t-xl z-50`,
        },
        createElement("ul",
            {
                className: "flex flex-col md:flex-row space-y-1 md:space-y-0 items-center justify-center w-full h-full overflow-clip rounded-t-xl" 
            },
            routesArray.map((el, i) =>
                createElement("li",
                    {
                        key: i,
                        onClick: ()=> handleOpen(el.routePath),
                        className: `select-none  font-bold transition-all duration-75 ease-in cursor-pointer group ${hoverColors[i]} ${CheckIsActive(i) ? bgColors[i] + " [&>span]:underline [&>span]:text-slate-200 hover:opacity-80":"[&>span]:hover:underline [&>span]:hover:underline-offset-8 [&>span]:hover:text-slate-100"} h-min md:h-full w-full md:w-1/5 flex items-center justify-start relative overflow-clip`
                    },
                    // todo: make an array to do a hover component of a preview of the page
                        createElement("span",
                        {key:i+2,
                            className:"whitespace-nowrap p-2 text-3xl md:text-4xl text-start xl:text-center uppercase md:transform md:-rotate-90 h-fit transition duration-300 text-neutral-950"
                        },
                        RoutesLabel[el.routeName as NavbarRoutes]
                    ),
                )
            )
        )
    )
}
// constants
const hoverColors: readonly string[] = ["hover:bg-stone-600 dark:hover:bg-stone-700","hover:bg-sky-700 dark:hover:bg-sky-800","hover:bg-orange-600 dark:hover:bg-orange-700","hover:bg-indigo-600 dark:hover:bg-indigo-700","hover:bg-emerald-600 dark:hover:bg-emerald-700"] as const

const bgColors:readonly string[]  = ["bg-stone-600 dark:bg-stone-700","bg-sky-700 dark:bg-sky-800","bg-orange-600 dark:bg-orange-700","bg-indigo-600 dark:bg-indigo-700","bg-emerald-600 dark:bg-emerald-700"] as const