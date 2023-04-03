import "./Footer.css";
import Logo from "../logo/Logo";
import Navigation from "../nav/Navigation";

import instagram from "../../common/img/svg/instagram.svg";
import facebook from "../../common/img/svg/facebook.svg";
import twitter from "../../common/img/svg/twitter.svg";
import visa_mastercard from "../../common/img/jpg/visa-mastercard.jpg";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer">
                <div className="footer-line-1">
                    <Logo/>
                    <Navigation/>
                    <div className="footer-line-1__contacts">
                        <a className="footer-line-1__contact-phone"
                           href="tel:+74958235412">
                            +7 (495) 823-54-12
                        </a>
                        <a className="footer-line-1__contact-email"
                           href="mailto:hello@womazing.com">
                            hello@womazing.com
                        </a>
                    </div>
                </div>

                <div className="footer-line-2">
                    <div className="footer-links">
                        <a className="footer-links__link"
                           href="/rights-reserved">
                            © Все права защищены
                        </a>
                        <a className="footer-links__link"
                           href="/privacy-policy">
                            Политика конфиденциальности
                        </a>
                        <a className="footer-links__link"
                           href="/public-offer">
                            Публичная оферта
                        </a>
                    </div>
                    <div className="footer-catalog">
                        <a className="footer-catalog__link"
                           href="/catalog?type=coat">
                            Пальто
                        </a>
                        <a className="footer-catalog__link"
                           href="/catalog?type=sweatshirts">
                            Свитшоты
                        </a>
                        <a className="footer-catalog__link"
                           href="/catalog?type=cardigans">
                            Кардиганы
                        </a>
                        <a className="footer-catalog__link"
                           href="/catalog?type=hoodies">
                            Толстовки
                        </a>
                    </div>
                    <div className="footer-socials">
                        <a className="footer-socials__link"
                           href="https://instagram.com">
                            <img src={instagram}
                                 alt="Instagram"/>
                        </a>
                        <a className="footer-socials__link"
                           href="https://facebook.com">
                            <img src={facebook}
                                 alt="Facebook"/>
                        </a>
                        <a className="footer-socials__link"
                           href="https://twitter.com">
                            <img src={twitter}
                                 alt="Twitter"/>
                        </a>
                    </div>
                    <div className="footer-pay-systems">
                        <img src={visa_mastercard}
                             alt="Visa and Mastercard"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;