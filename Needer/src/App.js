import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from "./footer-folder/footer";
import Navbar from "./Navbar/Navbar";
import Home from "./homePage/Home";
import Help from "./Help/Help";
import Forum from "./App-forum/App-forum";
import FAQPage from "./faqPage/faqPage";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LoadingScreen from "./Waiting_screen/loadingScreen";
import AboutUs from "./aboutUs/aboutUs";

function App() {

  const [username, setUsername] = useState("dummy");
  const API_URL = "https://reqres.in/api/users/2";
  const token = localStorage.getItem('token');

  useEffect(() => {
      fetch(API_URL//,
      //   {
      //   method: "GET",
      //   contentType: "application/json",
      //   authentification : "Bearer " + {token}
      // }
      )
      .then(res => res.json()) //
      .then(res => {
          setUsername(res.data.first_name + " " + res.data.last_name)
          localStorage.setItem('user',username);
      })
  },[username]);

  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/form">
            <Forum />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/loading" component={LoadingScreen}/>
          <Route path="/faqpage">
            <FAQPage />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/> 
    </div>
  );
}

export default App;
