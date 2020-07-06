import React from 'react';
import { Button } from './';
import { useHistory, useLocation } from 'react-router-dom';

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

    const history = useHistory();

    const toLogin = () => {
        history.push('/login')
    }

    const location = useLocation();


    return (
        <div className='w100 flex justify-end items-center mr-6'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {location.pathname !== '/login' && '/resetpass' ? <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={toLogin}>Нэвтрэх</Button> : 'haha'}
        </div>
    );
};