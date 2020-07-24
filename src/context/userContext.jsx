import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useFirebase } from '../firebase';


export const userContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        name: ''
    })

    console.log(state);
    const {auth, db} = useFirebase();
    useEffect(() => {
        if (auth) {
            const unsubscribe = auth.onAuthStateChanged(function (user) {
                if (user) {
                    setState({user, name: ''});
                } else {
                    alert('user not logged in')
                }
            });
            return () => unsubscribe();
        }   
    }, [auth]);

    useEffect(() => {
        if (db && state.user) {
            const unsubscribe = db.collection('users').doc(state.user.uid).onSnapshot((doc) => {
                if (doc.exists){
                    setState({...state, name: doc.data().name});
                }
            })
            return () => unsubscribe();
        }
    }, [db, state.user])

    return (
        <userContext.Provider value={state}>
            {children}
        </userContext.Provider>
    )
}