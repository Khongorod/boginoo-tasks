import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useFirebase } from '../firebase';

export const Shortener = () => {
    const location = useLocation();
    const { db } = useFirebase();

    useEffect(() => {
        if (db) {
            db.collection('shortener').doc(location.pathname.slice(1)).get().then((doc) => {
                window.location.href = doc.data().long;
            })
        }
    }, [db])
    return (<></>)
}