import { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyAuGTGkdPVFKMB-7NzyqNT1tfjz1YaLUsg",
    authDomain: "boginoo-9ce3a.firebaseapp.com",
    databaseURL: "https://boginoo-9ce3a.firebaseio.com",
    projectId: "boginoo-9ce3a",
    storageBucket: "boginoo-9ce3a.appspot.com",
    messagingSenderId: "119837772304",
    appId: "1:119837772304:web:dc32e84661760d622c9895",
    measurementId: "G-L78KW6L9QJ"
};


export const useFirebase = () => {
    let [state, setState] = useState({ firebase });

    useEffect(() => {
        let app;
        if (!firebase.apps.length) {
            app = firebase.initializeApp(config);
        }
        const db = firebase.firestore(app);
        const auth = firebase.auth(app);
        setState({ firebase, app, db, auth })
    }, [])

    return state;
}