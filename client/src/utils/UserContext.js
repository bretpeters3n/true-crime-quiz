import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);



export const UserProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState([
        {
            name: "Emily",
            isLoggedIn: true,
        }
    ]);

    return (
        <UserContext.Provider

        value = {{loggedIn}}
        //user will be object that contains name and other data, ect. logged in


        //user info: were getting that from the login.
        >
            {children}
        </UserContext.Provider>
    )
};