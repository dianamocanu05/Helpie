import React from "react";
import Sidebar from './Sidebar';
import './Hamburger.css';

function Hamburger(){
    return (
        <div className="Hamburger" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap"></div>
        </div>
    );
}

export default Hamburger;