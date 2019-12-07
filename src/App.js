import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';

import { AuthContext } from "./config/auth/auth";
import { NavContext } from "./config/navigation/navigation"

import Routes from './config/routes';

import '../node_modules/antd/dist/antd.css';

import './App.css';

function App(props) {

  const [authToken, setAuthToken] = useState();
  const [navbarActiveKey, setNavbarActiveKey] = useState("1");  

  const setToken = (data) => {
    localStorage.setItem("redmineApiKey", data);
    setAuthToken(data);
  }

  const setActiveKey = (data) => { setNavbarActiveKey(data) };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <NavContext.Provider value={{ navbarActiveKey, setNavbarActiveKey: setActiveKey }}>
        <div style={{display: 'flex'}}>
          <NavigationBar />
          <Routes />
        </div>
      </NavContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
