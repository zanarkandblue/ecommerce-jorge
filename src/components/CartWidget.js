import { PiShoppingCartSimpleBold  } from "react-icons/pi";
import "./CartWidget.css";

const CartWidget = () => {



    return (




        <div class="navbar-end">
        <div className="navbar-item">
              <div className="cart">
                <div><PiShoppingCartSimpleBold size={25}/></div>
                <div className="badge">0</div>
                </div>
        </div>
        </div>
    )

}

export default CartWidget;