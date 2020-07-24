import React from 'react';
import { Button } from './';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../context/userContext';

export const Navigation = (props) => {
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */

    // const history = useHistory();
    // console.log(histroy);

    // const goBack = () => {
    //     history.goBack;
    // }
    const { user, name } = useContext(userContext);
    const history = useHistory();

    const toLogin = () => {
        history.push('/login')
    }

    const location = useLocation();


    return (
        <div className='w100 flex justify-end items-center mr-6'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {user && <div className='ml-4 font-ubuntu fs-20 lh-23 bold'>{name} <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L10.5 10.5L19 2" stroke="#02B589" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </div>}
            {!user && <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={toLogin}>Нэвтрэх</Button>}
        </div>
    );
};