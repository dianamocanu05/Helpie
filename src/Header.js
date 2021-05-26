import React from "react"
import Logo from "./Logo"
import Nav from "./Nav"
import NavBurger from "./NavBurger"
import "./styles/Header.css"
import useWindowDimensions from "./WindowDimensions"

const Header = () => {
    const { width } = useWindowDimensions();
    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <Logo name="Helpie" />
            </div>
            <div className="navContainer">
                {(width > 700) ? <Nav /> : <NavBurger/>}
            </div>
        </div>
    )
}

export default Header;