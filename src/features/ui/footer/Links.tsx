import SocialLink from "@/components/common/ui/footer/SocialLink";
import { SocialLinksArray } from "@/lib/data/SocialLinks";

export default function FooterLinks():JSX.Element{
return (
    <div className="space-x-2">
        {SocialLinksArray.map((el,i)=>(
            <SocialLink key={i} title={el.title} href={el.href} color={colors[i]}/>
        ))}
    </div>
    )
}

const colors =["hover:from-blue-600 hover:to-sky-500","hover:from-blue-500 hover:to-blue-700 ","hover:from-green-600  hover:to-green-400","hover:from-sky-400  hover:to-sky-400", "hover:from-green-500  hover:to-green-700", ]