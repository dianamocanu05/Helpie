import React, { useState } from "react"
import Header from "./Header"
import Login from "./Login"
import Overview from "./Overview"
import HomePage from "./HomePage"
import Footer from "./Footer"
import Register from "./Register"
import Profile from "./Profile"
import ContactPage from "./ContactPage"
import Motivation from "./Motivation"
import Join from "./Join"
import Logout from "./Logout"
import Needer from "./needer-app/Needer"

import FooterNeeder from "./needer-app/footer-folder/footer";
import Help from "./needer-app/Help/Help";
import Forum from "./needer-app/App-forum/App-forum";
import FAQPage from "./needer-app/faqPage/faqPage";
import AboutUs from "./needer-app/aboutUs/aboutUs";


import {Switch, Route } from "react-router-dom";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(0);
    return (
        <Switch>
            <Route exact path="/">
                <Header />
                <HomePage />
                <Footer />
            </Route>
            <Route exact path="/overview/login">
                <Header />
                <Login LogIn={setLoggedIn} />
                <Footer />
            </Route>
            <Route exact path="/overview/register" >
                <Header />
                <Register />
                <Footer />
            </Route>
            <Route exact path="/overview/profile" >
                <Header />
                <Profile />
                <Footer />
            </Route>
            <Route exact path="/overview/motivation" >
                <Header />
                <Motivation />
                <Footer />
            </Route>
            <Route exact path="/overview/join">
                <Header />
                <Join />
                <Footer />
            </Route>
            <Route exact path="/overview/overviewPage" >
                <Header />
                <Overview />
                <Footer />
            </Route>
            <Route exact path="/overview/ContactPage">
                <Header />
                <ContactPage />
                <Footer />
            </Route>
            <Route exact path="/overview/Logout" >
                <Header />
                <Logout LogIn={setLoggedIn} />
                <FooterNeeder />
            </Route>
            <Route path="/needer/form">
                <Forum />
            </Route>
            <Route path="/needer/help">
                <Help />
            </Route>
            <Route path="/needer/faqpage">
                <FAQPage />
            </Route>
            <Route path="/needer/aboutUs">
                <AboutUs />
            </Route>
            <Route exact path="/needer">
                <Needer />
            </Route>
        </Switch>
    )
}

export default App;