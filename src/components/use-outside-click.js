import {useEffect} from 'react'

export const useOutsideClick = (ref, callback) => {
    const click = (e) => {
        if (!ref.current)
            return;
        if (!ref.current.contains(e.target)) {
            // console.log(e.target);
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('click', click)

        return () => document.removeEventListener('click', click)
    }, [ref]);
}