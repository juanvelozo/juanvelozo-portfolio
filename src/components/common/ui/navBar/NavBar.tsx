"use client"
import { ReactNode } from "react";

export default function NavBar({ children }: { children: ReactNode }) {
    return (
        <header className='fixed top-0 w-full overflow-clip z-20 backdrop-filter backdrop-blur'>
            <nav className="w-full h-full flex items-center justify-between px-2 lg:px-12 z-10">
                {children}
            </nav>
        </header>
    )
}