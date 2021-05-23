import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import "./styles/NavBurger.css"

const navItems = [
  { title: "Home", url: "/" },
  { title: "Overview", url: "/overview/overviewPage" },
];

const LoggedInNavItems = [
  { title: "Profile", url: "/overview/profile" },
  { title: "Log Out", url: "/overview/logout"}
];

const LoggedOutNavItems = [
  { title: "Login", url: "/overview/login" },
  { title: "Register", url: "/overview/register" },
];

function isLoggedIn() {
  return localStorage.getItem("token") != null;
}

const NavBurger = () => {
  const generateNavList = () =>
  navItems.map((item, index) => (
    <div key={item.title}>
      <NavLink exact className="navbar__link" to={item.url}> {item.title} </NavLink>
    </div>
  ));
  const generateLoggedInNavList = () =>
  LoggedInNavItems.map((item, index) => (
    <div key={item.title}>
      <NavLink exact className="navbar__link" to={item.url}> {item.title} </NavLink>
    </div>
  ));
  const generateLoggedOutNavList = () =>
  LoggedOutNavItems.map((item, index) => (
    <div key={item.title}>
      <NavLink exact className="navbar__link" to={item.url}> {item.title} </NavLink>
    </div>
  ));
return <Menu right width={'100%'} >{generateNavList()}{isLoggedIn() ? generateLoggedInNavList() : generateLoggedOutNavList()}</Menu>;
};

export default NavBurger;