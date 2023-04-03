import './Navigation.css'

import React from "react";

const Navigation = () => {
    return (
        <nav className="nav">
            <a className="nav__link" href="/">
                Главная
            </a>
            <a className="nav__link" href="/shop">
                Магазин
            </a>
            <a className="nav__link" href="/about_brand">
                О бренде</a>
            <a className="nav__link nav__link_margin-right-0" href="/contacts">
                Контакты
            </a>
        </nav>
    );
}

export default Navigation;