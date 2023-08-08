import logo from "../../assets/logo.png"
import {NavBar} from './NavBar'

export const Header = () => {
  return (
    <header className="flex w-[100%] place-content-around place-items-center bg-slate-500">
        <div className="w-20 m-2" >
          <picture>
            <img src={logo} alt="" />
          </picture>
        </div>
        <NavBar/>
        
    </header>
  )
}
