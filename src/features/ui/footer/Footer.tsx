import Clock from "@/components/common/ui/footer/Clock";
import UserLocaleTimeZone from "@/components/common/ui/footer/UserLocaleTimeZone";
import FooterLinks from "./Links";

export default function Footer(): JSX.Element {

    return <footer className="w-full p-10 min-h-[30vh] bg-stone-300 dark:bg-neutral-700 text-neutral-950 dark:text-slate-100 md:flex justify-around rounded-t-2xl">
        <div className="flex flex-col justify-between w-full ">
            <div>
                <Clock serverTime={new Date()}/>
                <UserLocaleTimeZone />
            </div>
            <h2 className="font-SatoshiBold">This portfolio has been proudly design and coded by Juan Velozo</h2>
        </div>
        <div className="flex flex-col w-full ">
            <FooterLinks/>
        </div>
    </footer>
}