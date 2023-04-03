import './Header.css'
import Navigation from "../nav/Navigation";
import Logo from "../logo/Logo"
import icon_phone from "../../common/img/svg/icon_phone.svg"
import icon_shopping_cart from "../../common/img/svg/icon_shopping_cart.svg"

function Header() {
    return (
        <header className="main-header">
            <div className="header">
                <Logo/>
                <Navigation/>
                <div className="tel_bucket">
                    <div className="tel_bucket__tel">
                        <img src={icon_phone}/>
                        <a className="tel_bucket__tel_phone-text" href="tel:+74958235412">+7(495)823-54-12</a>
                    </div>

                    <div className="tel_bucket__bucket">
                        <img src={icon_shopping_cart}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;