import React from "react"
import SiteMap from "./SiteMap"
import Contact from "./Contact"
import Media from "./Media"
import "./styles/Footer.css"

const Footer = (props) => {
    return (
      <footer class="footer_overview">
        <Media/>
        <Contact/>
        <SiteMap isLoggedIn={props.isLoggedIn}/>
      </footer>
    )
}

export default Footer;