import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

export const LoginButton = () => {
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    return isAuthenticated
        ? <a className="Login-LogoutBtn" id="login-home" onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
        </a>
        
        : <a className="Login-LogoutBtn" id="login-home" onClick={() => loginWithRedirect()}>Log in</a>;

};
