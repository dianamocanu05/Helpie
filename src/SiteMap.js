import React from "react";
import { Link } from "react-router-dom";

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

const SiteMap = () => {
  const generateNavList = () =>
  navItems.map((item, index) => (
      <div key={item.title}>
        <Link to={item.url}> {item.title} </Link>
      </div>
    ));
  const generateLoggedInNavList = () =>
  LoggedInNavItems.map((item, index) => (
      <div key={item.title}>
        <Link to={item.url}> {item.title} </Link>
      </div>
    ));
  const generateLoggedOutNavList = () =>
  LoggedOutNavItems.map((item, index) => (
      <div key={item.title}>
        <Link to={item.url}> {item.title} </Link>
      </div>
    ));

  return <div className="site-map"><h2>Site map</h2>{generateNavList()}{isLoggedIn() ? generateLoggedInNavList() : generateLoggedOutNavList()}</div>;
};

export default SiteMap;