import React, { useState }  from "react";
import { Redirect } from "react-router";

const Logout = (props) => {
    localStorage.clear();
    props.LogIn(0);
    if(window.location.pathname == "/logout")
    {
        window.location.reload();
        window.location.replace("/");
    }
        
    return <Redirect to="/" />
}

export default Logout;