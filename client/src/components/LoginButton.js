import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

export const LoginButton = () => {
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    return isAuthenticated
        ? <Button className="Login-LogoutBtn" onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
        </Button>
        : <Button className="Login-LogoutBtn" onClick={() => loginWithRedirect()}>Log in</Button>;
};
