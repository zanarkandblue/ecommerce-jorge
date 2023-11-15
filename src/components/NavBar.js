import CartWidget from "./CartWidget"; 
import { PiRobot  } from "react-icons/pi";





const  NavBar = () => {

    return (
        <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
        
        
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            Soy un NPC <PiRobot/>
          </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
      
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <a className="navbar-item" href="#">
              Tienda
            </a>
            <a className="navbar-item" href="#">
              Contacto
            </a>
            </div>
          
      
      
        </div>
        <div class="navbar-end">
        <div class="navbar-item">
        <CartWidget/>
        </div>
        </div>
      </nav> 
    )
}

export default NavBar;