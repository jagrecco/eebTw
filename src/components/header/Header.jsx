import logo from "../../logo.png"
import {NavBar} from './NavBar'

export const Header = () => {
  return (
    <header className="flex">
        <picture>
            <img className="w-16" src={logo} alt="" />
        </picture>
        <NavBar/>
        
    </header>
  )
}
