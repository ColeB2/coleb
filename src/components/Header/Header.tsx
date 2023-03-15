import React from "react";
import './Header.css';

import titleCard from '../../images/coleb.png'

const Header = () => (
    <header className="portfolio--header">
            <a
                className="header-link"
                href="https://coleb.pythonanywhere.com/portfolio"
            >
                <img src={titleCard} alt="Text - Cole B"></img>
            </a>
    </header>
);

export default Header;
