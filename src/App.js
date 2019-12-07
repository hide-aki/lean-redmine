import React, { useState } from 'react';

import { AuthContext } from "./config/auth/auth";

import Routes from './config/routes';

import '../node_modules/antd/dist/antd.css';

import './App.css';

function App(props) {

  const [authToken, setAuthToken] = useState();

  const setToken = (data) => {
    localStorage.setItem("redmineApiKey", data);
    setAuthToken(data);
  }


  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
