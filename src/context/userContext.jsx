import React, { createContext } from 'react'
import { auth, db } from '../firebase'
import { useEffect } from 'react';
import { useState } from 'react';


export const userContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        history: []
    })
    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                db.collection('users').doc(user.user.uid).onSnapshot((res) => {
                    console.log(res)
                    setUser({

                    })
                })
            } else {
                alert('user not logged in')
            }
        });
    }, [auth])

    return (
        <userContext.Provider value={{}}>
            {children}
        </userContext.Provider>
    )
}