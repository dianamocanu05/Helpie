import React from 'react';
import './Needer.css';
import Footer from "./footer-folder/footer";
import Navbar from "./Navbar/Navbar";
import Home from "./homePage/Home";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import LoadingScreen from "./Waiting_screen/loadingScreen";

function Needer() {
  return (
    <div className="Needer">
      <Navbar />
      <Switch>
        {/*<Route path="/needer/form">
          <Forum />
  </Route>*/}
        {/*<Route path="/needer/help">
          <Help />
        </Route>*/}
        <Route path="/needer/loading" component={LoadingScreen} />
        {/*<Route path="/needer/faqpage">
          <FAQPage />
        </Route>*/}
        {/*<Route path="/needer/aboutUs">
          <AboutUs />
        </Route>*/}
        <Route path="/needer">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default Needer;
