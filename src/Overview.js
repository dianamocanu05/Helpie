import React from "react";
import styles from "./styles/Overview.css"
import { Link } from "react-router-dom";

const Overview = () => {
    return (
        <div id="paginaOverview">
            <div id="titlu">
                <div class="raze">
                    <span class="lumina">Together we are better!</span>
                    <span class="gradient"></span>
                    <span class="spotlight"></span>
                </div>
            </div>

            <div id="articole">

                <div >
                    <Link to="/overview/ContactPage" id="glow">Who are we?</Link>
                </div>
                <div >
                    <Link to="/overview/motivation" id="electric">Why are we doing this?</Link>
                </div>

                <div id="dublu">
                    <Link to="/overview/join" id="power">Why you should join us?</Link>
                </div>

            </div>

            <div>
                <Link to="/overview" id="jumping">
                    <span>H</span>
                    <span>e</span>
                    <span>l</span>
                    <span>p</span>
                    <span>i</span>
                    <span>e</span>
                </Link>
            </div>

        </div >
    )
}

export default Overview;