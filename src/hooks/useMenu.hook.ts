"use client"

import { NavbarRoutes, RoutesLabel, routesArray } from "@/constants/routes"
import { MenuContext, MenuContextType } from "@/context/MenuContext"
import { usePathname, useRouter } from "next/navigation"
import { useContext, createElement } from "react"
import { ArrowUpRightIcon } from "../../public/assets/svg/menu/ArrowUpRight"
import { MenuIcon } from "../../public/assets/svg/menu/MenuIcon"
import { CloseMenuIcon } from "../../public/assets/svg/menu/CloseMenu"

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
    const pathname = usePathname()
    // function
    function handleOpen(): void {
        setOpen(prev => !prev)
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
            open ? CloseMenuIcon() : MenuIcon()
        )
    )
}

export function Menu(): JSX.Element {
    // hooks
    const { open, setOpen } = useMenu()
    const pathname = usePathname()
    const { push } = useRouter()


    // function
    function handleOpen(url: string): void {
        push(url)
        setOpen(prev => !prev)
    }

    function CheckIsActive(index: number) {
        if (routesArray[index].routePath === '/' && pathname !== '/') return false
        return pathname.includes(routesArray[index].routePath)
    }

const className="pointer-events-none"
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
                        onClick: () => {
                            CheckIsActive(i) ? null:
                            handleOpen(el.routePath)
                        },
                        className: `select-none  font-bold transition-all duration-75 ease-in cursor-pointer group ${hoverColors[i]} ${CheckIsActive(i) ? `${bgColors[i]} pointer-events-none` + " [&>span]:underline [&>span]:text-slate-200 hover:opacity-80" : "[&>span]:hover:underline [&>span]:hover:underline-offset-8 [&>span]:hover:text-slate-100"} h-min md:h-full w-full md:w-1/5 flex items-center justify-start relative overflow-clip`
                    },

                    createElement("span",
                        {
                            key: i + 2,
                            className: "whitespace-nowrap p-2 text-3xl md:text-4xl text-start xl:text-center uppercase md:transform md:-rotate-90 h-fit transition duration-300 text-neutral-950 group-hover:scale-110"
                        },
                        RoutesLabel[el.routeName as NavbarRoutes]
                    ), createElement("div", { 
                        className: `absolute top-4 right-4 ${CheckIsActive(i) ?"[&>svg]:stroke-white rotate-180": iconColors[i]} group-hover:[&>svg]:stroke-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform delay-150 hidden md:block` }, 
                        ArrowUpRightIcon()
                    )

                )
            )
        )
    )
}
// constants
const hoverColors: readonly string[] = ["hover:bg-stone-600 dark:hover:bg-stone-700", "hover:bg-sky-700 dark:hover:bg-sky-800", "hover:bg-orange-600 dark:hover:bg-orange-700", "hover:bg-indigo-600 dark:hover:bg-indigo-700", "hover:bg-emerald-600 dark:hover:bg-emerald-700"] as const

const bgColors: readonly string[] = ["bg-stone-600 dark:bg-stone-700", "bg-sky-700 dark:bg-sky-800", "bg-orange-600 dark:bg-orange-700", "bg-indigo-600 dark:bg-indigo-700", "bg-emerald-600 dark:bg-emerald-700"] as const

const iconColors: readonly string[] = ["[&>svg]:stroke-stone-600 dark:[&>svg]:stroke-stone-700", "[&>svg]:stroke-sky-700 dark:[&>svg]:stroke-sky-800", "[&>svg]:stroke-orange-600 dark:[&>svg]:stroke-orange-700", "[&>svg]:stroke-indigo-600 dark:[&>svg]:stroke-indigo-700", "[&>svg]:stroke-emerald-600 dark:[&>svg]:stroke-emerald-700"] as const