import React, { useState }  from "react";
import { Redirect } from "react-router";

const Logout = (props) => {
    localStorage.clear();
    props.LogIn(0);
    return <Redirect to="/" />
}

export default Logout;