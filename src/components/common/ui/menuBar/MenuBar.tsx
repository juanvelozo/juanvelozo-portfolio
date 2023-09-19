import { Menu, MenuButton } from "@/hooks/useMenu.hook";
import ThemeSwitcher from "@/hooks/useTheme.hook";

export default function MenuBar():JSX.Element{
    return (
         <div className='fixed top-0 min-h-screen w-full overflow-clip'>
            <MenuButton />
            <ThemeSwitcher/>
            <Menu />
          </div>
    )
}