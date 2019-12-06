import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth";

function PrivateRoute({ component: Component, ...rest }) {
  
  const { authToken, setAuthToken } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authToken ? ( <Component {...props} /> ) : ( (localStorage.getItem("redmineApiKey")) ? setAuthToken(localStorage.getItem("redmineApiKey")) : <Redirect to={{ pathname: "/login", state: { referer: props.location } }} />)
      }
    />
  );
}

export default PrivateRoute;