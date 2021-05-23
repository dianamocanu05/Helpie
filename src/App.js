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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(0);
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={Login}>
                    <Login LogIn={setLoggedIn}/>
                </Route>
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/motivation" component={Motivation} />
                <Route exact path="/join" component={Join} />
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/ContactPage" component={ContactPage} />
                <Route exact path="/Logout" component={Logout} >
                    <Logout LogIn={setLoggedIn}/>
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;