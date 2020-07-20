import { useState, useEffect } from 'react';
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
firebase.initializeApp(config)
// export const useFirebase = () => {
//     let [state, setState] = useState({ firebase });
//     console.log(state)
//     useEffect = (() => {
//         if (!firebase.auth.length)
//             firebase.initializeApp(config)
//         const db = firebase.firestore();
//         const auth = firebase.auth();
//         setState({db, auth})
//         console.log(state)
//     }, [])
    
//     return state;
// }

export const db = firebase.firestore();
export const auth = firebase.auth();