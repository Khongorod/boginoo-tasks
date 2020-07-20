import React, { createContext } from 'react'


export const userContext = createContext({});

export const ContextProvider = ({ children }) => {

    

    return (
        <userContext.Provider value={{}}>
            {children}
        </userContext.Provider>
    )
}