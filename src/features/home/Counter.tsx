"use client"
import { AnimatedNumber } from '@/components/common/ui/numbers/AnimatedNumber'
import { useSpring } from 'framer-motion'
import { useEffect,useState } from 'react'

const default_value = 6950
export const AnimatedCounter = (): JSX.Element => {
    // states
    const [value, setValue] = useState<number>(default_value)

    // function
    function increment(){
        if(value >= 7000){
            setValue(prevCount => prevCount + 1)
        }
        else{
            7000
        }
        
    }

    // effects
    useEffect(() => {
        increment()
    }, [value])
    // render

    return (
        <div
            className="flex justify-around space-x-3 overflow-clip text-xl lg:text-8xl px-2 py-1 leading-none w-fit lg:w-[20rem] text-slate-800 dark:text-white"
        >
            <Digit place={1000} value={value} />
            <Digit place={100} value={value} />
            <Digit place={10} value={value} />
            <Digit place={1} value={value} />
        </div>
    )
}

const Digit = ({ place, value }: IDigit) => {
    let valueRoundedToPlace = Math.floor(value / place)
    let animatedValue = useSpring(valueRoundedToPlace)

    useEffect(() => {
        animatedValue.set(valueRoundedToPlace)
    }, [animatedValue, valueRoundedToPlace])

    return (
        <div style={{ height: 100  }} className="relative w-[1ch] tabular-nums">
            {[...Array(10).keys()].map((_, i) => (
                <AnimatedNumber key={i} mv={animatedValue}  number={i} />
            ))}
        </div>
    )
}
interface IDigit {
    place: number
    value: number
}
/**
 * @description Type 'IterableIterator' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher.
 */