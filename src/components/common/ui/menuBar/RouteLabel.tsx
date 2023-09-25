"use client"
import { usePathname } from "next/navigation"

export default function RouteLabel(){
    // hooks
    const pathName = usePathname()
    
    // functions
    function scrollToTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // render
    return(
        <div className="h-fit max-w-[12rem] sm:max-w-full overflow-hidden">

        <span className= "p-2 text-2xl lg:text-3xl md:text-3xl  text-start uppercase  text-neutral-950 dark:text-slate-50 font-SatoshiMedium select-none !truncate" onClick={scrollToTop}>
            {pathName ==='/' ? "jv" : pathName.replace("-"," ")}
        </span>
        </div>
    )
}