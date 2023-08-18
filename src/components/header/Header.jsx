import logo from "../../assets/logo.png"
import hamb from "../../assets/hamb.svg"
import {NavBar} from './NavBar'

export const Header = () => {
  return (
    <header className="flex w-[100%] py-4 place-content-around place-items-center">
        <div className="w-20 my-2" >
          <picture>
            <img src={logo} alt="" />
          </picture>
          <picture>
            <img src={hamb} alt="" />
          </picture>
        </div>

        <NavBar/>
        
    </header>
  )
}
