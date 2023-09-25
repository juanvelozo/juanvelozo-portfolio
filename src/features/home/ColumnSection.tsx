"use client"

import { ReactNode, useState } from "react"

export function ColumnSection({ title, sections, reverse }: IColumnSection): JSX.Element {
    // state
    const [focused, setFocused] = useState<number>(0)

    // function
    function handleFocus(index: number) {
        setFocused(prev => prev === index ? prev : index)
    }
    //constants 

    // render
    return (
        <div className="w-full space-y-4 snap-always snap-start">
            <h2 className={`${reverse ? "text-right" : "text-left"} text-5xl md:text-8xl font-SatoshiBold`}>{title}</h2>
            <div className="flex flex-col justify-start relative min-h-[70vh] space-y-4">
                {sections?.map((el, i) => {
                    return (
                        <div key={i} className={`flex flex-col-reverse w-full justify-between ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`} >
                            <div className={`md:absolute transition top-10 ${reverse ? "left-10" : "right-10"} opacity-100`}>
                                {focused === i ? el.children : null}
                            </div>
                            <h2 className={`hover:opacity-100 ${focused === i ? "opacity-100 font-SatoshiMedium after:content-['_↗'] " : "opacity-50 font-SatoshiRegular"} transition-all text-left text-4xl lg:text-7xl cursor-pointer  leading-tight justify-self-end`} onClick={() => handleFocus(i)}>
                                {el.title}
                            </h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

interface IColumnSection {
    title: string
    sections?: ISection[]
    reverse?: boolean
}

export interface ISection extends IColumnSection {
    children: ReactNode
}