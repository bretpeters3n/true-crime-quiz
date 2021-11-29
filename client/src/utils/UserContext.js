import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);



export const UserProvider = ({ children }) => {

    const [userState, setUserState] = useState(
        {
            name: "",
        }
    );

    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated && user) {
            console.log(`isAuthenticated`, user)
            // check if user is authenticated
            // Auth.login(JSON.stringify(user));
            setUserState({
                name: user.name,
            })
            console.log(`userState`, userState)
        }
        // create the user
    }, [isAuthenticated]
    )

    // Get user and authenticated flag from useAuth0 - user.id should exist

    // create a useEffect that looks for when the user is authenticated
    // make an api request POST to save the user in your database. - if user exists, don't save.

    return (
        <UserContext.Provider

            value={userState}
        //user will be object that contains name and other data, ect. logged in


        //user info: were getting that from the login.
        >
            {children}
        </UserContext.Provider>
    )
};