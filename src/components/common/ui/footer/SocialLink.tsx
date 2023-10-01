export default function SocialLink({ href, title,color }: ISocialLinkProps) {
    console.log(color);
    
    return (
        <a href={href} target="_blank" className={`font-bold text-sm text-neutral-800 dark:text-slate-400 cursor-pointer hover:text-transparent dark:hover:text-transparent inline-block hover:bg-clip-text hover:bg-gradient-to-tr ${color} transition-colors ease-in-out`} placeholder="social-link">
            {title}
        </a>
    )
}

export interface ISocialLinkProps {
    href?: string
    title?: string
    color:string
}