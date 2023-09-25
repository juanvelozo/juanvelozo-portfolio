"use client"
import Button from "@/components/common/button/Button";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";

export default function HeroButtons(): JSX.Element {
    // hooks
    const { push }=useRouter()

    // render
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center self-center gap-3">
            <Button title="Download CV" color="default" rounded="xl" variant="outlined" />
            <Button title="Contact me!" color="dark" rounded="xl"  onClick={() => push(routes.contact)} variant="contained" />
        </div>
    )

}