import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import './loadingScreen.css';



function LoadingScreen() {
  const location = useLocation();
  const values = location.state?.values;

  return (
    <div className="App">
      <header className="App-header">
        <p class="text">Vă rugăm să așteptați...</p>
        {alert(values)}
        <div class="loader"></div>
      </header>
    </div>
  );
}

export default LoadingScreen;
