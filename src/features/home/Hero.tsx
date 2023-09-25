import { AnimatedCounter } from "./Counter";
import HeroButtons from "./HeroButtons";

export default function HeroHome(): JSX.Element {
  return (
    <div className="h-[95vh] w-full flex flex-col justify-evenly snap-always snap-start">
      <div className="flex items-center justify-center">
        <div className="space-y-0 lg:space-y-10">
          <h2 className="text-gray-500 text-left text-4xl md:text-6xl lg:text-8xl select-none font-SatoshiBlack leading-9">I'm <br /><b className="text-slate-800  dark:text-white text-4xl md:text-6xl lg:text-8xl select-text ">Juan Velozo</b>, a Frontend <b className="text-slate-800   dark:text-white text-4xl md:text-6xl lg:text-8xl select-text ">developer</b> with 3 years of experience on <b className="text-slate-800  dark:text-white text-4xl md:text-6xl lg:text-8xl select-text text-right">React & TypeScript</b></h2>
        </div>
      </div>
      <HeroButtons />
      <span className="text-center font-SatoshiLight text-2xl animate-bounce">scroll down!</span>
    </div>
  )
}