import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const ResetPass = () => {


    return (
        <Layout>
            <div className='h100 flex flex-col items-center'>
                <div className='flex justify-center items-center mt-5'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-nolobster c-primary fs-2 lh-70 mt-1'>
                    Boginoo
                </div>
                {/* <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 mt-4 b-primary'>Илгээх</Button> */}
            </div>
        </Layout>
    )
}