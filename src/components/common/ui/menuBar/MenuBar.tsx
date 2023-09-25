import { MenuButton } from "@/hooks/useMenu.hook";
import ThemeSwitcher from "@/hooks/useTheme.hook";
import RouteLabel from "./RouteLabel";
import NavBar from "../navBar/NavBar";

export default function MenuBar(): JSX.Element {
  return (
      <NavBar>
        <div className="flex items-center">
          <MenuButton />
          <RouteLabel/>
        </div>
        <ThemeSwitcher/>
    </NavBar>
      
  )
}