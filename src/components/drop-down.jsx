import React, { useRef, useState } from "react";
import { useOutsideClick } from "./use-outside-click";

export const DropDown = ({name}) => {
    const [show, setShow] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => {
        setShow(false);
    });

    return (
        <div ref={ref} className="dropdown" style={{position: 'relative'}}>
            <div onClick={() => setShow(!show)} className='ml-4 font-ubuntu fs-20 lh-23 bold'>{name}
                <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L10.5 10.5L19 2" stroke="#02B589" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            {show && (
                <div style={{position: 'absolute'}}>
                    <div>Home</div>
                    <div>History</div>
                    <div>Logout</div>
                </div>
            )}
        </div>
    );
}